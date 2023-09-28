import { ApiResult, UsersDeleteParams, UsersDeleteResult } from "../../shared/types";
import { makeDelete } from "../base/makeDelete";

export function deleteUser(params: UsersDeleteParams): Promise<ApiResult<UsersDeleteResult>> {
  return makeDelete("users", params);
}
