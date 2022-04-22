import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "@@core";
import { actions, getProjectActiveSecurityFeatureIds, RootState } from "@@store";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (value, { dispatch, getState }) => {
    const state = getState() as RootState;
    const specs = state.project.documentSpecs;

    const scoreResponse = await apiClient.computeScores({
      documentDesignAnswers: specs.designAnswers,
      securityFeaturesIDs: getProjectActiveSecurityFeatureIds(state),
    });

    dispatch(actions.projectSetDocumentScore(scoreResponse.scores!));
  }
);
