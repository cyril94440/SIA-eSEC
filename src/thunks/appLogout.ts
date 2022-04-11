import { createAsyncThunk } from "@reduxjs/toolkit";

export const appLogout = createAsyncThunk<void, void>("appLogout", async (_, {}) => {
  console.log("TODO: handle logout");
});
