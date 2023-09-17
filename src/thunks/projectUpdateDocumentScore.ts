import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "@@core/api/client";
import { actions, getProjectActiveSecurityFeatureIds, RootState } from "@@store";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (_value, { dispatch, getState }) => {
    const state = getState() as RootState;
    const specs = state.project.specs;

    const scoreResult = await Api.projectComputeScores({
      documentDesignAnswers: specs.document.designAnswers,
      securityFeaturesIDs: getProjectActiveSecurityFeatureIds(state),
    });

    console.log("scoreResult", scoreResult);

    if (!scoreResult.success) {
      console.log(scoreResult.error);
      return;
    }

    dispatch(actions.projectSetScore(scoreResult.data.scores!));
  }
);
