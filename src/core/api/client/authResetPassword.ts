import { ApiResult, ResetPasswordParameters, ResetPasswordResult } from "../shared/types";
import { makePatch } from "./base/makePatch";

export function authResetPassword(params: ResetPasswordParameters): Promise<ApiResult<ResetPasswordResult>> {
  return makePatch("auth/reset-password", params);
}
