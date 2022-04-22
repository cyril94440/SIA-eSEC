import { configureStore } from "@reduxjs/toolkit";
import { root, RootState } from "./reducers";

export const store = configureStore({
  reducer: root,
});

export * from "./utils";
export * as actions from "./actions";
export type { RootState } from "./reducers";
export type AppDispatch = typeof store.dispatch;
