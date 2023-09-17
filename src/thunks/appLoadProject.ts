import { createAsyncThunk } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import selectFiles from "select-files";
import { Api } from "@@core/api/client";
import { ProjectFile } from "@@core/project-file";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const appLoadProject = createAsyncThunk<void, { router: NextRouter }>(
  "appLoadProject",
  async (params, { dispatch }) => {
    const files = await selectFiles({ accept: `.${ProjectFile.FILE_EXT}`, multiple: false });
    const file = files?.[0];

    if (!file) {
      return;
    }

    const content = await file.text();
    const res = await Api.projectFileDecode({ content, password: "password" });

    if (!res.success) {
      console.log(res.error);
      return;
    }

    dispatch(actions.projectInitExisting(res.data.specs));
    dispatch(projectUpdateDocumentScore());
    await params.router.push("/project");
  }
);
