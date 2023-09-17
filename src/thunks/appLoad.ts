import { createAsyncThunk } from "@reduxjs/toolkit";
import { localStorage } from "@@core/local-storage";
import { actions } from "@@store";

export const appLoad = createAsyncThunk<void, void>("appToggleSidenav", async (args, { dispatch }) => {
  const minimized = localStorage.appSidenavMinimized.get();
  dispatch(actions.appSetLoaded(true));
  dispatch(actions.appSetSidenavMinimized(minimized));
});
