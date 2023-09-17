import { NextApiHandler } from "next";
import { Rpc } from "@@core/rpc/server";
import { ApiResult } from "../shared/types";
import { handleAuthenticated } from "./base/handle-authenticated";

export const handler: NextApiHandler<ApiResult<Rpc.ComputeScoreResponse>> = async (req, res) => {
  await handleAuthenticated("POST", req, res, async () => {
    const client = Rpc.createComputeScoreClient();
    const scoreReq = req.body as Rpc.ComputeScoreRequest;
    const scoreRes = await Rpc.getPromise<Rpc.ComputeScoreResponse>((cb) => client.computeScores(scoreReq, cb));
    res.status(200).json({
      success: true,
      data: scoreRes,
    });
  });
};
