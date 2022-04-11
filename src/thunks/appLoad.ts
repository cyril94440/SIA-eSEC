import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { LocalStorage } from "@@services";

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
