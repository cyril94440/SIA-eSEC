import { NextApiHandler } from "next";
import { ApiResult, ResetPasswordResult } from "../../shared/types";
import { handleAuthenticated } from "../base/handle-authenticated";
import { db } from "lib/db";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt, { compare } from "bcrypt";

export const handler: NextApiHandler<ApiResult<ResetPasswordResult>> = async (req, res) => {
  await handleAuthenticated("PATCH", req, res, async (token) => {
    /**
     * Check that user exists with the email stored in the token
     */
    const user = await db.user.findUnique({
      where: {
        email: token.email ?? "",
      },
    });

    if (!user) {
      return res.status(200).json({ success: false, error: "User not found." });
    }

    /**
     * BODY VERIFICATION
     */
    if (!req.body.token || !req.body.oldPassword || !req.body.password) {
      return res.status(200).json({ success: false, error: "Missing parameters." });
    }

    if (!(await compare(req.body.oldPassword, user.password))) {
      return res.status(400).json({ success: false, error: "Your old password is incorrect." });
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

      // Verify that token contains the same id and email as the user
      if (resetToken.id !== user.id || resetToken.email !== user.email) {
        return res.status(400).json({ success: false, error: "Parameters do not match." });
      }

      // Verify that token contains the correct action
      if (resetToken.action !== "reset-password") {
        return res.status(400).json({ success: false, error: "Invalid action." });
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: "Token is either invalid or expired." });
    }

    /**
     * DB CREATION
     */
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
  });
};
