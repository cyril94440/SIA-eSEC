import { configureStore } from "@reduxjs/toolkit";
import { profile } from "./profile";
import { project } from "./project";

export const store = configureStore({
  reducer: {
    profile,
    project,
  },
});

export type RootState = ReturnType<typeof store.getState>;
