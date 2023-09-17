import { ProjectSpecs } from "@@core/project";

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
