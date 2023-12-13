import { NextApiHandler } from "next";
import { ApiResult, InviteDeleteResult, InvitesGetResult } from "../shared/types";
import { handleAuthenticated } from "./base/handle-authenticated";
import { db } from "lib/db";
import { UserRole } from "@@core/auth";

export const handler: NextApiHandler<ApiResult<InvitesGetResult | InviteDeleteResult>> = async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const invites = await db.invite.findMany();
        return res.status(200).json({ success: true, data: { invites } });
      } catch {
        return res.status(200).json({ success: false, error: "Couldn't fetch invites." });
      }
    case "DELETE":
      await handleAuthenticated("DELETE", req, res, async (token) => {
        const isAdmin = token?.role === UserRole.Admin;
        if (!isAdmin) return res.status(200).json({ success: false, error: "Unauthorized" });
        if (!req.body.email) return res.status(200).json({ success: false, error: "Missing parameters." });

        try {
          await db.invite.delete({
            where: {
              email: req.body.email,
            },
          });

          return res.status(200).json({ success: true, data: { message: "Invite successfully deleted." } });
        } catch (error) {
          return res.status(200).json({ success: false, error: "An error occured, couldn't delete invite." });
        }
      });
      break;
    default:
      return res.status(200).json({ success: false, error: "Method not allowed" });
  }
};
