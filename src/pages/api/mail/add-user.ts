import sendMail from "core/services/email";
import { MailContent } from "core/types";
import { validateEmail } from "lib/utils/validate-email";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

type ResponseData = {
  message: string;
};

/**
 * Sign up procecess:
 *
 * (1) An admin can create a new user in the admin panel by sending an email to the user.
 * (2) The user will receive this email containing a link to add his username and password.
 * (3) Once that's done, the user is created in the database.
 *
 * This route handles the (1) and (2) step.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  // Check that request contains email and role
  if (!req.body.email || !req.body.role) {
    return res.status(400).json({ message: "Missing email or role." });
  }

  // Check that role is valid
  if (req.body.role !== "USER" && req.body.role !== "ADMIN") {
    return res.status(400).json({ message: "Invalid role." });
  }

  // Check that email is valid
  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ message: "Invalid email." });
  }

  // Check that JWT_PRIVATE_KEY is set
  if (!process.env.JWT_PRIVATE_KEY) {
    return res.status(500).json({ message: "Security issue has been detected." });
  }

  const token = jwt.sign(
    {
      email: req.body.email,
      role: req.body.role,
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "7d",
    }
  );

  const mailContent: MailContent = {
    toEmail: req.body.email,
    subject: "Welcome to eSec!",
    text: `You received an invite to join eSec! Click the link below to activate your account.
    http://localhost:3000/activate?token=${token}
    `,
  };

  const mailResponse = await sendMail(mailContent);

  return res.status(mailResponse.success ? 200 : 500).json({ message: mailResponse.message });
}
