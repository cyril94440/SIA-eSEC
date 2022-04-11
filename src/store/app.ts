import { createReducer } from "@reduxjs/toolkit";
import * as actions from "@@actions";

interface AppState {
  loaded: boolean;
  sidenavMinimized: boolean;
}

const initialState: AppState = {
  loaded: false,
  sidenavMinimized: false,
};

export const app = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.appSetLoaded, (state, action) => {
      state.loaded = action.payload;
    })
    .addCase(actions.appSetSidenavMinimized, (state, action) => {
      state.sidenavMinimized = action.payload;
    });
});
