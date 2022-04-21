import { NextApiHandler } from "next";
import { ApiResult } from "@@core";
import * as rpc from "@@rpc/server";

const handler: NextApiHandler<ApiResult<rpc.ComputeScoreResponse>> = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const client = rpc.createComputeScoreClient();
  const scoreRequest = JSON.parse(req.body) as rpc.ComputeScoreRequest;
  const scoreResponse = await rpc.getPromise<rpc.ComputeScoreResponse>((cb) => client.computeScores(scoreRequest, cb));

  res.status(200).json({
    success: true,
    data: scoreResponse,
  });
};

export default handler;
