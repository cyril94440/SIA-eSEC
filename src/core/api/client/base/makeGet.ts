import axios from "axios";
import { ApiResult } from "../../shared/types";

export async function makeGet<Data>(path: string): Promise<ApiResult<Data>> {
  const res = await axios.get(`/api/${path}`);
  return res.data;
}
