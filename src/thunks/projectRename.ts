import { createAsyncThunk } from "@reduxjs/toolkit";

export const projectRename = createAsyncThunk<void, void>("projectRename", async (value, { dispatch }) => {
  console.log("TODO: handle rename");
});
