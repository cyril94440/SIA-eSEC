import { createAsyncThunk } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import selectFiles from "select-files";
import { consts, parseProjectFile, ProjectFile } from "@@core";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const appLoadProject = createAsyncThunk<void, { router: NextRouter }>(
  "appLoadProject",
  async (params, { dispatch }) => {
    const files = await selectFiles({ accept: `.${consts.PROJECT_FILE_EXT}`, multiple: false });
    const file = files?.[0];

    if (!file) {
      return;
    }

    const json = await file.text();
    const data = JSON.parse(json) as ProjectFile.Root;
    const specs = parseProjectFile(data);

    dispatch(actions.projectInitExisting(specs));
    dispatch(projectUpdateDocumentScore());
    await params.router.push("/project");
  }
);
