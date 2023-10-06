import { ApiResult, InvitesGetResult, UsersGetResult } from "../../shared/types";
import { makeGet } from "../base/makeGet";

export function getInvites(): Promise<ApiResult<InvitesGetResult>> {
  return makeGet("invites");
}
