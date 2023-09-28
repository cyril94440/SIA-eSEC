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

    case "DELETE":
      await handleAuthenticated("DELETE", req, res, async (token) => {
        const isAdmin = token?.role === UserRole.Admin;
        if (!isAdmin) return res.status(200).json({ success: false, error: "Unauthorized" });
        if (!req.body.id) return res.status(200).json({ success: false, error: "Missing parameters." });

        try {
          await db.user.delete({
            where: {
              id: req.body.id,
            },
          });

          return res.status(200).json({ success: true, data: { message: "User deleted." } });
        } catch (error) {
          return res.status(200).json({ success: false, error: "An error occured, couldn't delete user." });
        }
      });

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

    default:
      return res.status(200).json({ success: false, error: "Method not allowed" });
  }
};
