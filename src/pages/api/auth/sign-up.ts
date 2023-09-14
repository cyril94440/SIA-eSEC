import type { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "lib/db";
import bcrypt from "bcrypt";
import { validateEmail } from "lib/utils/validate-email";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  /**
   * BODY VERIFICATION
   */
  if (
    !req.body.token ||
    !req.body.email ||
    !req.body.password ||
    !req.body.confirmPassword ||
    !req.body.username ||
    !req.body.role
  ) {
    return res.status(400).json({ message: "Missing parameters." });
  }

  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ message: "Invalid email." });
  }

  /**
   * JWT VERIFICATION
   */
  if (!process.env.JWT_PRIVATE_KEY) {
    return res.status(500).json({ message: "Security issue has been detected." });
  }

  let token: JwtPayload;
  try {
    // Verify the signature of the JWT
    token = jwt.verify(req.body.token, process.env.JWT_PRIVATE_KEY) as JwtPayload;

    // Verify that token contains the same email and role as the one sent in the request
    if (token.email !== req.body.email || token.role !== req.body.role) {
      return res.status(400).json({ message: "Parameters do not match." });
    }

    // Verify that token contains the correct action
    if (token.action !== "create-user") {
      return res.status(400).json({ message: "Invalid action." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Token is either invalid or expired." });
  }

  /**
   * DB CREATION
   */
  try {
    const encryptedPassword = await bcrypt.hash(req.body.password, 10);

    await db.user.create({
      data: {
        email: token.email,
        username: req.body.username,
        password: encryptedPassword,
        role: token.role,
      },
    });
    return res.status(200).json({
      message: "User successfully created.",
    });
  } catch (error) {
    return res.status(400).json({ message: "Could not create user." });
  }
}
