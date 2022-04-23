import { createReducer } from "@reduxjs/toolkit";
import * as rpc from "@@rpc/shared";
import { DocumentScoreTarget, DocumentSpecs, DocumentStandardCompliance, DocumentType, ProjectStatus } from "@@core";
import * as actions from "../actions";

export interface ProjectState {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  documentScore: rpc.TNScore | null;
  documentSecurityFeaturesInfo: rpc.SecurityFeature[];
}

const initialState: ProjectState = {
  title: "Test project",
  status: ProjectStatus.ONGOING,
  documentSpecs: {
    type: DocumentType.PASSPORT,
    material: rpc.SFMaterial.Plastic,
    standardCompliance: DocumentStandardCompliance.EU_PASSPORT,
    scoreTarget: DocumentScoreTarget.SIA_RECO,
    designAnswers: [],
    securityFeatures: [],
  },
  documentScore: null,
  documentSecurityFeaturesInfo: [],
};

export const project = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.projectSetDocumentType, (state, action) => {
      state.documentSpecs.type = action.payload;
    })
    .addCase(actions.projectSetDocumentMaterial, (state, action) => {
      state.documentSpecs.material = action.payload;
    })
    .addCase(actions.projectSetDocumentStandardCompliance, (state, action) => {
      state.documentSpecs.standardCompliance = action.payload;
    })
    .addCase(actions.projectSetDocumentScoreTarget, (state, action) => {
      state.documentSpecs.scoreTarget = action.payload;
    })
    .addCase(actions.projectSetDocumentDesignAnswer, (state, action) => {
      const newItem = action.payload;
      const answers = state.documentSpecs.designAnswers;
      const answersMap = new Map(answers.map((a) => [a.idQuestion, a]));
      answersMap.delete(newItem.idQuestion);
      answersMap.set(newItem.idQuestion, newItem);
      state.documentSpecs.designAnswers = Array.from(answersMap.values());
    })
    .addCase(actions.projectSetDocumentSecurityFeatures, (state, action) => {
      state.documentSpecs.securityFeatures = action.payload;
    })
    .addCase(actions.projectSetDocumentSecurityFeaturesInfo, (state, action) => {
      state.documentSecurityFeaturesInfo = action.payload;
    })
    .addCase(actions.projectSetDocumentScore, (state, action) => {
      state.documentScore = action.payload;
    });
});
