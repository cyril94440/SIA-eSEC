import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { AppState } from "@@store";
import { calculateDocumentScore } from "@@utils";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (value, { dispatch, getState }) => {
    const state = getState() as AppState;
    const specs = state.project.documentSpecs;
    const score = await calculateDocumentScore(specs);
    dispatch(actions.projectSetDocumentScore(score));
  }
);
