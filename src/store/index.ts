import { configureStore } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

export const store = configureStore({
  reducer: reducers,
});

export * as actions from "./actions";

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
