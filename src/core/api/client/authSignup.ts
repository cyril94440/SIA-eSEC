import { ApiResult, SignUpParameters, SignUpResult } from "../shared/types";
import { makePost } from "./base/makePost";

export function authSignup(params: SignUpParameters): Promise<ApiResult<SignUpResult>> {
  return makePost("auth/sign-up", params);
}
