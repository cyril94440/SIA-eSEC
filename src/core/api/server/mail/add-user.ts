import { ApiResult, MailResetPasswordResult } from "core/api/shared/types";
import { NextApiHandler } from "next";
import { handleAuthenticated } from "../base/handle-authenticated";
import { validateEmail } from "lib/utils/validate-email";
import jwt from "jsonwebtoken";
import { UserRole } from "@@core/auth";
import { MailContent, sendMail } from "@@core/mail";
import { db } from "lib/db";

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
     * Check that body contains email and role, and are valid
     */
    if (!req.body.email || !req.body.role) {
      return res.status(200).json({ success: false, error: "Missing parameters." });
    }

    if (req.body.role !== "USER" && req.body.role !== "ADMIN") {
      return res.status(200).json({ success: false, error: "Invalid role." });
    }

    if (!validateEmail(req.body.email)) {
      return res.status(400).json({ success: false, error: "Invalid email." });
    }

    const invite = await db.invite.findUnique({
      where: {
        email: req.body.email ?? "",
      },
    });

    if (invite?.email) {
      return res.status(200).json({ success: false, error: "User already exists." });
    }

    /**
     * JWT signing
     */
    if (!process.env.JWT_PRIVATE_KEY) {
      return res.status(500).json({ success: false, error: "Security issue has been detected." });
    }

    const activateToken = jwt.sign(
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
        
        
        Click here to activate your account: ${process.env.NEXTAUTH_URL}/activate?token=${activateToken}
        `,
    };

    const mailResponse = await sendMail(mailContent);

    if (!mailResponse.success) {
      return res.status(200).json({ success: false, error: "Failed to send email." });
    }

    await db.invite.create({
      data: {
        email: req.body.email,
      },
    });

    return res.status(200).json({ success: true, data: { message: mailResponse.message } });
  });
};
