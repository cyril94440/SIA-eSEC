import { NextApiHandler } from "next";
import { ApiResult } from "@@core/api";
import { Rpc } from "@@core/rpc/server";

const handler: NextApiHandler<ApiResult<Rpc.ComputeScoreResponse>> = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }

  const client = Rpc.createComputeScoreClient();
  const scoreRequest = JSON.parse(req.body) as Rpc.ComputeScoreRequest;
  const scoreResponse = await Rpc.getPromise<Rpc.ComputeScoreResponse>((cb) => client.computeScores(scoreRequest, cb));

  res.status(200).json({
    success: true,
    data: scoreResponse,
  });
};

export default handler;
