import { createAsyncThunk } from "@reduxjs/toolkit";
import FileSaver from "file-saver";
import sanitizeFilename from "sanitize-filename";
import { buildProjectFile, consts } from "@@core";
import { RootState } from "@@store";

export const projectSave = createAsyncThunk<void, void>("projectSave", async (value, { dispatch, getState }) => {
  const { project } = getState() as RootState;
  const data = buildProjectFile(project.specs);
  const blob = new Blob([JSON.stringify(data, null, 4)], { type: "text/plain; charset=utf-8" });
  const filename = sanitizeFilename(`${data.content.title}.${consts.PROJECT_FILE_EXT}`);
  FileSaver.saveAs(blob, filename);
});
