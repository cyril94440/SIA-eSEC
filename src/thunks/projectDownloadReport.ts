import { createAsyncThunk } from "@reduxjs/toolkit";

export const projectDownloadReport = createAsyncThunk<void, void>(
  "projectDownloadReport",
  async (value, { dispatch }) => {
    console.log("TODO: handle download report");
  }
);
