import { createReducer } from "@reduxjs/toolkit";

export interface ProfileState {
  userName: string;
}

const initialState: ProfileState = {
  userName: "John Doe",
};

export const profile = createReducer(initialState, () => {});
