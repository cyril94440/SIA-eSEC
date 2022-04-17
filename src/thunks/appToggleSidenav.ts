import { createAsyncThunk } from "@reduxjs/toolkit";
import { LocalStorage } from "@@core";
import { actions, AppState } from "@@store";

export interface AppToggleSidenavArgs {
  localStorage: LocalStorage;
}

export const appToggleSidenav = createAsyncThunk<void, AppToggleSidenavArgs>(
  "appToggleSidenav",
  async ({ localStorage }, { dispatch, getState }) => {
    const state = getState() as AppState;
    const minimized = !state.app.sidenavMinimized;
    dispatch(actions.appSetSidenavMinimized(minimized));
    localStorage.appSidenavMinimized.set(minimized);
  }
);
