import { ApiResult, ProjectFileEncodeParams, ProjectFileEncodeResult } from "../shared/types";
import { makePost } from "./base/makePost";

export function projectFileEncode(params: ProjectFileEncodeParams): Promise<ApiResult<ProjectFileEncodeResult>> {
  return makePost("project-file/encode", params);
}
