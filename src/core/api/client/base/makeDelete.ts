import axios from "axios";
import { ApiResult } from "../../shared/types";

export async function makeDelete<Body, Data>(path: string, body: Body): Promise<ApiResult<Data>> {
  const res = await axios.delete(`/api/${path}`, { data: body });
  return res.data;
}
