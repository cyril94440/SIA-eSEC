import { ApiResult, MailForgotPasswordParameters, MailForgotPasswordResult } from "../../shared/types";
import { makePost } from "../base/makePost";

export function sendForgotPasswordMail(
  params: MailForgotPasswordParameters
): Promise<ApiResult<MailForgotPasswordResult>> {
  return makePost("mail/forgot-password", params);
}
