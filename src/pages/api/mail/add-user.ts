import sendMail from "core/services/email";
import { MailContent } from "core/types";
import { validateEmail } from "lib/utils/validate-email";
import type { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { getToken } from "next-auth/jwt";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const userToken = await getToken({ req });
  const isAuthenticated = !!userToken;

  const isAdmin = isAuthenticated && userToken.role === "ADMIN";

  if (!isAuthenticated || !isAdmin) {
    return res.status(401).end();
  }

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
      action: "create-user",
    },
    process.env.JWT_PRIVATE_KEY,
    {
      expiresIn: "7d",
    }
  );

  const mailContent: MailContent = {
    toEmail: req.body.email,
    subject: "Welcome to eSec !",
    text: `You received an invite to join eSec!
    
    
    Click here to activate your account: http://localhost:3000/activate?token=${token}
    `,
  };

  const mailResponse = await sendMail(mailContent);

  return res.status(mailResponse.success ? 200 : 500).json({ message: mailResponse.message });
}
