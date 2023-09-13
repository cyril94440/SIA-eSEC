import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut } from "next-auth/react";

export const appLogout = createAsyncThunk<void, void>("appLogout", async (_, {}) => {
  console.log("TODO: handle logout");
  await signOut({ callbackUrl: "/login" });
});
