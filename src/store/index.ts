import { configureStore } from "@reduxjs/toolkit";
import { project } from "./project";

export const store = configureStore({
  reducer: {
    project,
  },
});

export type RootState = ReturnType<typeof store.getState>;
