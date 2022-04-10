import { createReducer } from "@reduxjs/toolkit";

interface AppState {
  sidenavMinimized: boolean;
}

const initialState: AppState = {
  sidenavMinimized: true,
};

export const app = createReducer(initialState, () => {});
