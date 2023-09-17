import { createAsyncThunk } from "@reduxjs/toolkit";
import FileSaver from "file-saver";
import sanitizeFilename from "sanitize-filename";
import { ProjectFile } from "@@core/project-file";
import { RootState } from "@@store";

export const projectSave = createAsyncThunk<void, void>("projectSave", async (value, { dispatch, getState }) => {
  const { project } = getState() as RootState;
  const data = ProjectFile.build(project.specs);
  const blob = new Blob([JSON.stringify(data, null, 4)], { type: "text/plain; charset=utf-8" });
  const filename = sanitizeFilename(`${data.content.title}.${ProjectFile.FILE_EXT}`);
  FileSaver.saveAs(blob, filename);
});
