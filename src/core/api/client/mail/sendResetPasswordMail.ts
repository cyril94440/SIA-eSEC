import { ApiResult, MailResetPasswordParameters, MailResetPasswordResult } from "../../shared/types";
import { makePost } from "../base/makePost";

export function sendResetPasswordMail(
  params: MailResetPasswordParameters
): Promise<ApiResult<MailResetPasswordResult>> {
  return makePost("mail/reset-password", params);
}
