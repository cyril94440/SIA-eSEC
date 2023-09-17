import axios from "axios";
import { ApiResult } from "../../shared/types";

export async function makePost<Body, Data>(path: string, body: Body): Promise<ApiResult<Data>> {
  const res = await axios.post(`/api/${path}`, body);
  return res.data;
}
