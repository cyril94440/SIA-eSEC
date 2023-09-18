import axios from "axios";
import { ApiResult } from "../../shared/types";

export async function makePatch<Body, Data>(path: string, body: Body): Promise<ApiResult<Data>> {
  const res = await axios.patch(`/api/${path}`, body);
  return res.data;
}
