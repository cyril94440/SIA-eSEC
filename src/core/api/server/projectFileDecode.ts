import { NextApiHandler } from "next";
import { ProjectFile } from "@@core/project-file";
import { decrypt } from "@@core/project-file/server/crypto";
import { ApiResult, ProjectFileDecodeParams, ProjectFileDecodeResult } from "../shared/types";
import { handleAuthenticated } from "./base/handle-authenticated";

export const handler: NextApiHandler<ApiResult<ProjectFileDecodeResult>> = async (req, res) => {
  await handleAuthenticated("POST", req, res, async () => {
    const { content, password } = req.body as ProjectFileDecodeParams;
    const data = decrypt(content, password);

    if (!data) {
      return res.status(200).json({
        success: false,
        error: "Incorrect file or password",
      });
    }

    const specs = ProjectFile.parse(data);
    res.status(200).json({
      success: true,
      data: { specs },
    });
  });
};
