import { NextApiHandler } from "next";
import { ProjectFile } from "@@core/project-file";
import { encrypt } from "@@core/project-file/server/crypto";
import { ApiResult, ProjectFileEncodeParams, ProjectFileEncodeResult } from "../shared/types";
import { handleAuthenticated } from "./base/handle-authenticated";

export const handler: NextApiHandler<ApiResult<ProjectFileEncodeResult>> = async (req, res) => {
  await handleAuthenticated("POST", req, res, async () => {
    const { specs, password } = req.body as ProjectFileEncodeParams;
    const data = ProjectFile.build(specs);
    const content = encrypt(data, password);
    res.status(200).json({
      success: true,
      data: { content },
    });
  });
};
