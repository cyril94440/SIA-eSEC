import { ApiResult, SignUpResult } from "core/api/shared/types";
import jwt, { JwtPayload } from "jsonwebtoken";
import { db } from "lib/db";
import { validateEmail } from "lib/utils/validate-email";
import { NextApiHandler } from "next";
import bcrypt from "bcrypt";

export const handler: NextApiHandler<ApiResult<SignUpResult>> = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(200).json({ success: false, error: "Wrong method." });
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
    return res.status(200).json({ success: false, error: "Missing parameters." });
  }

  if (req.body.password !== req.body.confirmPassword) {
    return res.status(200).json({ success: false, error: "Passwords do not match." });
  }

  if (!validateEmail(req.body.email)) {
    return res.status(200).json({ success: false, error: "Invalid email." });
  }

  /**
   * JWT VERIFICATION
   */
  if (!process.env.JWT_PRIVATE_KEY) {
    return res.status(200).json({ success: false, error: "Security issue has been detected." });
  }

  let token: JwtPayload;
  try {
    // Verify the signature of the JWT
    token = jwt.verify(req.body.token, process.env.JWT_PRIVATE_KEY) as JwtPayload;

    // Verify that token contains the same email and role as the one sent in the request
    if (token.email !== req.body.email || token.role !== req.body.role) {
      return res.status(200).json({ success: false, error: "Parameters do not match." });
    }

    // Verify that token contains the correct action
    if (token.action !== "create-user") {
      return res.status(200).json({ success: false, error: "Invalid action." });
    }
  } catch (error) {
    return res.status(200).json({ success: false, error: "Token is either invalid or expired." });
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
      success: true,
      data: { message: "User successfully created." },
    });
  } catch (error) {
    return res.status(200).json({ success: false, error: "Could not create user." });
  }
};
