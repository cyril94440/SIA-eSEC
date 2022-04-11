import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { RootState } from "@@store";
import { LocalStorage } from "@@services";

export interface AppToggleSidenavArgs {
  localStorage: LocalStorage;
}

export const appToggleSidenav = createAsyncThunk<void, AppToggleSidenavArgs>(
  "appToggleSidenav",
  async ({ localStorage }, { dispatch, getState }) => {
    const state = getState() as RootState;
    const minimized = !state.app.sidenavMinimized;
    dispatch(actions.appSetSidenavMinimized(minimized));
    localStorage.appSidenavMinimized.set(minimized);
  }
);
