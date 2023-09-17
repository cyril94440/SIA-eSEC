import { Rpc } from "@@core/rpc/shared";
import { ApiResult } from "../shared/types";
import { makePost } from "./base/makePost";

export function projectComputeScores(req: Rpc.ComputeScoreRequest): Promise<ApiResult<Rpc.ComputeScoreResponse>> {
  return makePost("project/compute-scores", req);
}
