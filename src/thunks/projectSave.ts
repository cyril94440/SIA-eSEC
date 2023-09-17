import { createAsyncThunk } from "@reduxjs/toolkit";
import FileSaver from "file-saver";
import sanitizeFilename from "sanitize-filename";
import { Api } from "@@core/api/client";
import { ProjectFile } from "@@core/project-file";
import { RootState } from "@@store";

export const projectSave = createAsyncThunk<void, void>("projectSave", async (value, { dispatch, getState }) => {
  const { project } = getState() as RootState;
  const res = await Api.projectFileEncode({ specs: project.specs, password: "password" });

  if (!res.success) {
    console.log(res.error);
    return;
  }

  const blob = new Blob([res.data.content], { type: "text/plain; charset=utf-8" });
  const filename = sanitizeFilename(`${project.specs.title}.${ProjectFile.FILE_EXT}`);
  FileSaver.saveAs(blob, filename);
});
