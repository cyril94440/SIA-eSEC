import { ApiResult, ProjectFileDecodeParams, ProjectFileDecodeResult } from "../shared/types";
import { makePost } from "./base/makePost";

export function projectFileDecode(params: ProjectFileDecodeParams): Promise<ApiResult<ProjectFileDecodeResult>> {
  return makePost("project-file/decode", params);
}
