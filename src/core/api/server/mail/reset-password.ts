import { ApiResult, MailResetPasswordResult } from "core/api/shared/types";
import { NextApiHandler } from "next";
import { handleAuthenticated } from "../base/handle-authenticated";
import { validateEmail } from "lib/utils/validate-email";
import jwt from "jsonwebtoken";
import { UserRole } from "@@core/auth";
import { MailContent, sendMail } from "@@core/mail";

export const handler: NextApiHandler<ApiResult<MailResetPasswordResult>> = async (req, res) => {
  await handleAuthenticated("POST", req, res, async (token) => {
    /**
     * Check that user is an admin
     */
    const isAuthenticated = !!token;
    const isAdmin = isAuthenticated && token?.role === UserRole.Admin;

    if (!isAuthenticated || !isAdmin) {
      return res.status(200).json({ success: false, error: "Not authorized." });
    }

    /**
     * Check that body contains email, and that email is valid
     */
    if (!req.body.email) {
      return res.status(200).json({ success: false, error: "Missing parameters." });
    }

    if (!validateEmail(req.body.email)) {
      return res.status(400).json({ success: false, error: "Invalid email." });
    }

    /**
     * JWT signing
     */
    if (!process.env.JWT_PRIVATE_KEY) {
      return res.status(500).json({ success: false, error: "Security issue has been detected." });
    }

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
      subject: "Reset your password",
      text: `Hi, 
  
  
  Click here to reset your password: ${process.env.NEXTAUTH_URL}/reset-password?token=${resetPasswordToken}
  `,
    };

    const mailResponse = await sendMail(mailContent);

    if (!mailResponse.success) {
      return res.status(200).json({ success: false, error: "Failed to send email." });
    }
    return res.status(200).json({ success: true, data: { message: mailResponse.message } });
  });
};
