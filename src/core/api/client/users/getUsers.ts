import { ApiResult, ResetPasswordResult, UsersGetResult } from "../../shared/types";
import { makeGet } from "../base/makeGet";

export function getUsers(): Promise<ApiResult<UsersGetResult>> {
  return makeGet("users");
}
