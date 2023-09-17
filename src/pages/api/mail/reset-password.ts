import { validateEmail } from "lib/utils/validate-email";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { getUserToken, UserRole } from "@@core/auth";
import { MailContent, sendMail } from "@@core/mail";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  /**
   * Check that user is an admin
   */
  const token = await getUserToken({ req });
  const isAuthenticated = !!token;
  const isAdmin = isAuthenticated && token?.role === UserRole.Admin;

  if (!isAuthenticated || !isAdmin) {
    return res.status(401).end();
  }

  /**
   * Check that body contains id and email, and that email is valid
   */
  if (!req.body.id && !req.body.email) {
    return res.status(400).json({ message: "Missing parameters." });
  }

  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ message: "Invalid email." });
  }

  /**
   * JWT signing
   */
  if (!process.env.JWT_PRIVATE_KEY) {
    return res.status(500).json({ message: "Security issue has been detected." });
  }

  const resetPasswordToken = jwt.sign(
    {
      id: req.body.id,
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
    subject: "Reset your password",
    text: `Hi, 
    
    
    Click here to reset your password: ${process.env.NEXTAUTH_URL}/reset-password?token=${resetPasswordToken}
    `,
  };

  const mailResponse = await sendMail(mailContent);

  return res.status(mailResponse.success ? 200 : 500).json({ message: mailResponse.message });
}
