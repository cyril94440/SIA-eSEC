import { configureStore } from "@reduxjs/toolkit";
import { root } from "./reducers";

export const store = configureStore({
  reducer: root,
});

export * as actions from "./actions";
export type AppDispatch = typeof store.dispatch;
export type { RootState } from "./reducers";
