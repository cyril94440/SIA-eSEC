import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "@@core/api/client";
import { getDocumentSelectedSecurityFeatures } from "@@core/project";
import { actions, RootState } from "@@store";

export const projectUpdateDocumentScore = createAsyncThunk<void, void>(
  "projectUpdateDocumentScore",
  async (_value, { dispatch, getState }) => {
    const state = getState() as RootState;
    const { specs, allSecurityFeatures } = state.project;

    const scoreResult = await Api.projectComputeScores({
      material: specs.document.material,
      documentDesignAnswers: specs.document.designAnswers,
      securityFeaturesIDs: getDocumentSelectedSecurityFeatures(specs, allSecurityFeatures).map((f) => f.id),
    });

    if (!scoreResult.success) {
      console.log(scoreResult.error);
      return;
    }

    dispatch(actions.projectSetScore(scoreResult.data.scores!));
  }
);
