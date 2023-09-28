import { ApiResult, UsersUpdateParameters, UsersUpdateResult } from "../../shared/types";
import { makePatch } from "../base/makePatch";

export function updateUser(params: UsersUpdateParameters): Promise<ApiResult<UsersUpdateResult>> {
  return makePatch("users", params);
}
