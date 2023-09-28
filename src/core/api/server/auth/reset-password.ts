import { NextApiHandler } from "next";
import { ApiResult, ResetPasswordResult } from "../../shared/types";
import { db } from "lib/db";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";

export const handler: NextApiHandler<ApiResult<ResetPasswordResult>> = async (req, res) => {
  if (req.method !== "PATCH") {
    return res.status(200).json({ success: false, error: "Wrong method." });
  }

  /**
   * BODY VERIFICATION
   */
  if (!req.body.token || !req.body.password) {
    return res.status(200).json({ success: false, error: "Missing parameters." });
  }

  /**
   * JWT VERIFICATION
   */
  if (!process.env.JWT_PRIVATE_KEY) {
    return res.status(200).json({ success: false, error: "Security issue has been detected." });
  }

  let resetToken: JwtPayload;
  try {
    // Verify the signature of the JWT
    resetToken = jwt.verify(req.body.token, process.env.JWT_PRIVATE_KEY) as JwtPayload;

    // Check that user exists with the email stored in the token
    const user = await db.user.findUnique({
      where: {
        email: resetToken.email ?? "",
      },
    });

    if (!user) {
      return res.status(200).json({ success: false, error: "User not found." });
    }

    // Verify that token contains the same email as the user
    if (resetToken.email !== user.email) {
      return res.status(400).json({ success: false, error: "Parameters do not match." });
    }

    // Verify that token contains the correct action
    if (resetToken.action !== "reset-password") {
      return res.status(400).json({ success: false, error: "Invalid action." });
    }
    try {
      const encryptedNewPassword = await bcrypt.hash(req.body.password, 10);
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          password: encryptedNewPassword,
        },
      });
      return res.status(200).json({
        success: true,
        data: { message: "User successfully updated." },
      });
    } catch (error) {
      return res.status(200).json({ success: false, error: "Could not update user." });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: "Token is either invalid or expired." });
  }
};
