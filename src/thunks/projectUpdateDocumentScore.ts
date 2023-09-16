import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "@@core";
import { actions, getProjectActiveSecurityFeatureIds, RootState } from "@@store";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (_value, { dispatch, getState }) => {
    const state = getState() as RootState;
    const specs = state.project.specs;

    const scoreResponse = await apiClient.computeScores({
      documentDesignAnswers: specs.document.designAnswers,
      securityFeaturesIDs: getProjectActiveSecurityFeatureIds(state),
    });

    dispatch(actions.projectSetScore(scoreResponse.scores!));
  }
);
