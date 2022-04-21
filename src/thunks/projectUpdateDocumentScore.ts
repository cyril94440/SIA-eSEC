import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "@@core";
import { actions, AppState } from "@@store";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (value, { dispatch, getState }) => {
    const state = getState() as AppState;
    const specs = state.project.documentSpecs;

    const scoreResponse = await apiClient.computeScores({
      documentDesignAnswers: specs.designAnswers,
      securityFeaturesIDs: specs.securityFeatures,
    });

    // console.log("scores", scoresResponse.scores);
    dispatch(actions.projectSetDocumentScore(scoreResponse.scores!));
  }
);
