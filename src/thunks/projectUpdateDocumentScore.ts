import { createAsyncThunk } from "@reduxjs/toolkit";
import { calculateDocumentScore } from "@@core";
import { actions, AppState } from "@@store";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (value, { dispatch, getState }) => {
    const state = getState() as AppState;
    const specs = state.project.documentSpecs;
    const designQuestions = state.project.documentDesignQuestions;

    if (!designQuestions) {
      return;
    }

    const score = await calculateDocumentScore(specs, designQuestions);
    dispatch(actions.projectSetDocumentScore(score));
  }
);
