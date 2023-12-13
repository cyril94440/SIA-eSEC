import { ApiResult, InviteDeleteParams, InviteDeleteResult } from "../../shared/types";
import { makeDelete } from "../base/makeDelete";

export function deleteInvite(params: InviteDeleteParams): Promise<ApiResult<InviteDeleteResult>> {
  return makeDelete("invites", params);
}
