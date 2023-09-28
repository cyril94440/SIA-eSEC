import { ApiResult, MailAddUserParameters, MailAddUserResult } from "../../shared/types";
import { makePost } from "../base/makePost";

export function sendAddUserMail(params: MailAddUserParameters): Promise<ApiResult<MailAddUserResult>> {
  return makePost("mail/add-user", params);
}
