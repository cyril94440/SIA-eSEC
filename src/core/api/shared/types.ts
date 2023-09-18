import { ProjectSpecs } from "@@core/project";
import { User } from "@prisma/client";

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
  oldPassword: string;
  password: string;
}

export interface ResetPasswordResult {
  message: string;
}

export interface SignUpParameters {
  token: string;
  email: string;
  role: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface SignUpResult {
  message: string;
}
