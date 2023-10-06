import { ProjectSpecs } from "@@core/project";
import { Invite, User } from "@prisma/client";

export type ApiResult<Data> = { success: true; data: Data } | { success: false; error: string };

export interface ProjectFileEncodeParams {
  specs: ProjectSpecs;
  password: string;
}

export interface ProjectFileEncodeResult {
  content: string;
}

export interface ProjectFileDecodeParams {
  content: string;
  password: string;
}

export interface ProjectFileDecodeResult {
  specs: ProjectSpecs;
}

export interface ResetPasswordParameters {
  token: string;
  password: string;
}

export interface ResetPasswordResult {
  message: string;
}

export interface SignUpParameters {
  token: string;
  email: string;
  role: string;
  fullname: string;
  password: string;
  confirmPassword: string;
  acceptTermsAndConditions: boolean;
}

export interface SignUpResult {
  message: string;
}

export interface UsersGetResult {
  users: User[];
}

export interface UsersDeleteResult {
  message: string;
}

export interface UsersDeleteParams {
  id: string;
}

export interface UsersUpdateParameters {
  id: string;
  role: string;
}

export interface UsersUpdateResult {
  message: string;
}

/**
 * MAIL
 */

export interface MailResetPasswordParameters {
  email: string;
}

export interface MailResetPasswordResult {
  message: string;
}

export interface MailForgotPasswordParameters {
  email: string;
}

export interface MailForgotPasswordResult {
  message: string;
}

export interface MailAddUserParameters {
  email: string;
  role: "USER" | "ADMIN";
}

export interface MailAddUserResult {
  message: string;
}

/**
 * INVITES
 */
export interface InvitesGetResult {
  invites: Invite[];
}
