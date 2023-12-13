import { NextApiHandler } from "next";
import { ApiResult, UsersDeleteResult, UsersGetResult, UsersUpdateResult } from "../shared/types";
import { handleAuthenticated } from "./base/handle-authenticated";
import { db } from "lib/db";
import { UserRole } from "@@core/auth";

export const handler: NextApiHandler<ApiResult<UsersGetResult | UsersDeleteResult | UsersUpdateResult>> = async (
  req,
  res
) => {
  switch (req.method) {
    case "GET":
      await handleAuthenticated("GET", req, res, async (token) => {
        const isAdmin = token?.role === UserRole.Admin;
        if (!isAdmin) return res.status(200).json({ success: false, error: "Unauthorized" });

        try {
          const users = await db.user.findMany();
          return res.status(200).json({ success: true, data: { users: users } });
        } catch (error) {
          return res.status(200).json({ success: false, error: "An error occured, couldn't get users." });
        }
      });
      break;
    case "DELETE":
      await handleAuthenticated("DELETE", req, res, async (token) => {
        const isAdmin = token?.role === UserRole.Admin;
        if (!isAdmin) return res.status(200).json({ success: false, error: "Unauthorized" });
        if (!req.body.id) return res.status(200).json({ success: false, error: "Missing parameters." });

        try {
          const user = await db.user.delete({
            where: {
              id: req.body.id,
            },
          });

          // Check if user had an invite and delete it
          const invite = await db.invite.findUnique({
            where: {
              email: user.email,
            },
          });

          if (invite) {
            await db.invite.delete({
              where: {
                email: invite.email,
              },
            });
          }

          return res.status(200).json({ success: true, data: { message: "User successfully deleted." } });
        } catch (error) {
          return res.status(200).json({ success: false, error: "An error occured, couldn't delete user." });
        }
      });
      break;
    case "PATCH":
      await handleAuthenticated("PATCH", req, res, async (token) => {
        const isAdmin = token?.role === UserRole.Admin;
        if (!isAdmin) return res.status(200).json({ success: false, error: "Unauthorized" });

        try {
          await db.user.update({
            where: {
              id: req.body.id,
            },
            data: {
              role: req.body.role,
            },
          });

          return res.status(200).json({ success: true, data: { message: "User updated." } });
        } catch (error) {
          return res.status(200).json({ success: false, error: "An error occured, couldn't update user." });
        }
      });
      break;
    default:
      return res.status(200).json({ success: false, error: "Method not allowed" });
  }
};
