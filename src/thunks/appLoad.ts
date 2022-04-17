import { createAsyncThunk } from "@reduxjs/toolkit";
import { LocalStorage } from "@@core";
import { actions } from "@@store";

export interface AppLoadArgs {
  localStorage: LocalStorage;
}

export const appLoad = createAsyncThunk<void, AppLoadArgs>(
  "appToggleSidenav",
  async ({ localStorage }, { dispatch }) => {
    const minimized = localStorage.appSidenavMinimized.get();
    dispatch(actions.appSetLoaded(true));
    dispatch(actions.appSetSidenavMinimized(minimized));
  }
);
