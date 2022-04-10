import { createAsyncThunk } from "@reduxjs/toolkit";

export const projectViewEncryptionInfo = createAsyncThunk<void, void>(
  "projectViewEncryptionInfo",
  async (value, { dispatch }) => {
    console.log("TODO: handle view encryption info");
  }
);
