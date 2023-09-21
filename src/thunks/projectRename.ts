import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "@@store";

export const projectRename = createAsyncThunk<void, string>("projectRename", async (value, { dispatch }) => {
  dispatch(actions.projectSetTitle(value));
});
