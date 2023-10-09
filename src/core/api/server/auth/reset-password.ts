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
  if (!req.body.token || !req.body.password || !req.body.recaptchaToken) {
    return res.status(200).json({ success: false, error: "Missing parameters." });
  }

  await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${process.env.RECAPTCHA_SECRET}&response=${req.body.recaptchaToken}`,
  })
    .then((reCaptchaRes) => reCaptchaRes.json())
    .then(async (reCaptchaRes) => {
      if (reCaptchaRes?.score <= 0.5) {
        return res.status(200).json({ success: false, error: "ReCaptcha score is less than 0.5." });
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
      } catch (error) {
        return res.status(500).json({ success: false, error: "Token is either invalid or expired." });
      }

      try {
        // Check that user exists with the email stored in the token
        const user = await db.user.findUnique({
          where: {
            email: resetToken.email,
          },
        });

        if (!user) {
          return res.status(200).json({ success: false, error: "User not found." });
        }

        // Verify that token contains the correct action
        if (resetToken.action !== "reset-password") {
          return res.status(400).json({ success: false, error: "Invalid action." });
        }

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
    })
    .catch(() => {
      return res.status(200).json({ success: false, error: "Could not update user." });
    });
};
