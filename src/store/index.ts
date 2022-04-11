import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { app } from "./app";
import { profile } from "./profile";
import { project } from "./project";

export const reducer = combineReducers({ app, profile, project });

export type RootState = ReturnType<typeof reducer>;

export function createStore() {
  return configureStore({ reducer });
}
