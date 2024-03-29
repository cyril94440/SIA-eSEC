import { createReducer } from "@reduxjs/toolkit";
import { DocumentStandardTarget, ProjectSpecs, ProjectStatus } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import * as actions from "../actions";

export interface ProjectState {
  specs: ProjectSpecs;
  score: Rpc.TNScore | null;
  allSecurityFeatures: Rpc.SecurityFeature[];
}

const initialState: ProjectState = {
  specs: {
    title: "Test project",
    status: ProjectStatus.ONGOING,
    document: {
      type: Rpc.SFDocumentType.Card,
      standardTarget: DocumentStandardTarget.ICAO_DOC_9303,
      designAnswers: [],
      securityFeatureIds: [],
    },
  },
  score: null,
  allSecurityFeatures: [],
};

export const project = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.projectInitEmpty, () => {
      return initialState;
    })
    .addCase(actions.projectInitExisting, (_, action) => {
      return {
        specs: action.payload,
        score: null,
        allSecurityFeatures: [],
      };
    })
    .addCase(actions.projectSetTitle, (state, action) => {
      state.specs.title = action.payload;
    })
    .addCase(actions.projectSetScore, (state, action) => {
      state.score = action.payload;
    })
    .addCase(actions.projectSetSecurityFeatures, (state, action) => {
      state.allSecurityFeatures = action.payload;
    })
    .addCase(actions.projectSetDocumentType, (state, action) => {
      state.specs.document.type = action.payload;
    })
    .addCase(actions.projectSetDocumentStandardTarget, (state, action) => {
      state.specs.document.standardTarget = action.payload;
    })
    .addCase(actions.projectSetDocumentDesignAnswer, (state, action) => {
      const newItem = action.payload;
      const answers = state.specs.document.designAnswers;
      const answersMap = new Map(answers.map((a) => [a.idQuestion, a]));
      answersMap.delete(newItem.idQuestion);
      answersMap.set(newItem.idQuestion, newItem);
      state.specs.document.designAnswers = Array.from(answersMap.values());
    })
    .addCase(actions.projectSetDocumentSecurityFeatureIds, (state, action) => {
      state.specs.document.securityFeatureIds = action.payload;
    });
});
