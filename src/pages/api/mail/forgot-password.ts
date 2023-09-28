import { validateEmail } from "lib/utils/validate-email";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { MailContent, sendMail } from "@@core/mail";
import { db } from "lib/db";

type Data = { success: true; data: ResponseData } | { success: false; error: string };
type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (true === true) {
    return res.status(200).json({ success: true, data: { message: "OK" } });
  }
  if (req.method !== "POST") {
    return res.status(200).json({ success: false, error: "Wrong method." });
  }

  /**
   * Check that body contains id and email, and that email is valid
   */
  if (!req.body.email) {
    return res.status(200).json({ success: false, error: "Missing parameters." });
  }

  if (!validateEmail(req.body.email)) {
    return res.status(200).json({ success: false, error: "Invalid email." });
  }

  /**
   * Check that user exists with the email
   */
  const user = await db.user.findUnique({
    where: {
      email: req.body.email ?? "",
    },
  });

  if (!user) {
    return res.status(200).json({ success: false, error: "User not found." });
  }

  /**
   * JWT signing
   */
  if (!process.env.JWT_PRIVATE_KEY) {
    return res.status(200).json({ success: false, error: "Security issue has been detected." });
  }

  try {
    const resetPasswordToken = jwt.sign(
      {
        email: req.body.email,
        action: "reset-password",
      },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: "7d",
      }
    );

    const mailContent: MailContent = {
      toEmail: req.body.email,
      subject: "You have forgot your password",
      text: `Hi, 

    You have forgot your password? Don't worry! Just click on the following link to reset your password:
    
    ${process.env.NEXTAUTH_URL}/reset-password?token=${resetPasswordToken}
    `,
    };

    await sendMail(mailContent);

    return res.status(200).json({ success: true, data: { message: "Mail sent." } });
  } catch (error) {
    return res.status(200).json({ success: false, error: "Something went wrong." });
  }
}
