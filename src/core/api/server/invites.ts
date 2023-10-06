import { NextApiHandler } from "next";
import { Rpc } from "@@core/rpc/server";
import { ApiResult, InvitesGetResult } from "../shared/types";
import { handleAuthenticated } from "./base/handle-authenticated";
import { db } from "lib/db";

export const handler: NextApiHandler<ApiResult<InvitesGetResult>> = async (req, res) => {
  await handleAuthenticated("GET", req, res, async () => {
    try {
      const invites = await db.invite.findMany();
      return res.status(200).json({ success: true, data: { invites } });
    } catch {
      return res.status(200).json({ success: false, error: "Couldn't fetch invites." });
    }
  });
};
