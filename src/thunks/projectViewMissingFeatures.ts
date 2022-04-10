import { createAsyncThunk } from "@reduxjs/toolkit";

export const projectViewMissingFeatures = createAsyncThunk<void, void>(
  "projectViewMissingFeatures",
  async (value, { dispatch }) => {
    console.log("TODO: handle view missing features");
  }
);
