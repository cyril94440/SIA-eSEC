import { Rpc } from "@@core/rpc/shared";
import { ApiResult } from "./types";

class Api {
  async computeScores(req: Rpc.ComputeScoreRequest): Promise<Rpc.ComputeScoreResponse> {
    return this.makePost("compute-scores", req);
  }

  private async makePost<Body, Data>(path: string, body: Body): Promise<Data> {
    const res = await fetch(`/api/${path}`, { method: "POST", body: JSON.stringify(body) });
    const result: ApiResult<Data> = await res.json();

    if (!result.success) {
      throw new Error(result.message);
    }

    return result.data;
  }
}

export const api = new Api();
