import { configureStore } from "@reduxjs/toolkit";
import { app } from "./app";
import { profile } from "./profile";
import { project } from "./project";

export const store = configureStore({
  reducer: { app, profile, project },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
