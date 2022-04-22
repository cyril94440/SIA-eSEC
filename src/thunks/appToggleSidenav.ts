import { createAsyncThunk } from "@reduxjs/toolkit";
import { localStorage } from "@@core";
import { actions, RootState } from "@@store";

export const appToggleSidenav = createAsyncThunk<void, void>(
  "appToggleSidenav",
  async (args, { dispatch, getState }) => {
    const state = getState() as RootState;
    const minimized = !state.app.sidenavMinimized;
    dispatch(actions.appSetSidenavMinimized(minimized));
    localStorage.appSidenavMinimized.set(minimized);
  }
);
