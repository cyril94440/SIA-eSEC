import type { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "lib/db";
import bcrypt, { compare } from "bcrypt";
import { validateEmail } from "lib/utils/validate-email";
import { getToken } from "next-auth/jwt";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "PATCH") {
    return res.status(405).end();
  }

  const userToken = await getToken({ req });
  const isAuthenticated = !!userToken;

  if (!isAuthenticated) {
    return res.status(401).end();
  }

  /**
   * Check that user exists with the email stored in the token
   */
  const user = await db.user.findUnique({
    where: {
      email: userToken.email ?? "",
    },
  });

  if (!user) {
    return res.status(401).end();
  }

  /**
   * BODY VERIFICATION
   */
  if (
    !req.body.token ||
    !req.body.id ||
    !req.body.email ||
    !req.body.oldPassword ||
    !req.body.password ||
    !req.body.confirmPassword
  ) {
    return res.status(400).json({ message: "Missing parameters." });
  }

  if (!validateEmail(req.body.email)) {
    return res.status(400).json({ message: "Invalid email." });
  }

  if (user.email !== req.body.email) {
    return res.status(400).json({ message: "Emails do not match." });
  }

  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  if (!(await compare(req.body.oldPassword, user.password))) {
    return res.status(400).json({ message: "Your old password is incorrect." });
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

    // Verify that token contains the same id and email as the user
    if (token.id !== user.id || token.email !== user.email) {
      return res.status(400).json({ message: "Parameters do not match." });
    }

    // Verify that token contains the correct action
    if (token.action !== "reset-password") {
      return res.status(400).json({ message: "Invalid action." });
    }
  } catch (error) {
    return res.status(500).json({ message: "Token is either invalid or expired." });
  }

  /**
   * DB CREATION
   */
  try {
    const encryptedNewPassword = await bcrypt.hash(req.body.password, 10);
    await db.user.update({
      where: {
        id: req.body.id,
      },
      data: {
        password: encryptedNewPassword,
      },
    });
    return res.status(200).json({
      message: "User successfully updated.",
    });
  } catch (error) {
    return res.status(400).json({ message: "Could not update user." });
  }
}
