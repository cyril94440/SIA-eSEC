import { createReducer } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import {
  DocumentMaterial,
  DocumentScore,
  DocumentScoreTarget,
  DocumentSecurityFeature,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType,
  ProjectStatus,
} from "@@types";

interface ProjectState {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  documentScore: DocumentScore | null;
}

const initialState: ProjectState = {
  title: "Test project",
  status: ProjectStatus.ONGOING,
  documentSpecs: {
    type: DocumentType.PASSPORT,
    material: DocumentMaterial.PAPER,
    standardCompliance: DocumentStandardCompliance.EU_PASSPORT,
    scoreTarget: DocumentScoreTarget.SIA_RECO,
    designAnswer1: true,
    designAnswer2: false,
    securityFeatures: [
      DocumentSecurityFeature.IR_A,
      DocumentSecurityFeature.IR_D,
      DocumentSecurityFeature.OFFSET_DESIGN_B,
      DocumentSecurityFeature.OFFSET_DESIGN_C,
      DocumentSecurityFeature.OFFSET_DESIGN_E,
      DocumentSecurityFeature.OFFSET_DESIGN_H,
    ],
  },
  documentScore: null,
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
    .addCase(actions.projectSetDocumentDesignAnswer1, (state, action) => {
      state.documentSpecs.designAnswer1 = action.payload;
    })
    .addCase(actions.projectSetDocumentDesignAnswer2, (state, action) => {
      state.documentSpecs.designAnswer2 = action.payload;
    })
    .addCase(actions.projectSetDocumentSecurityFeatures, (state, action) => {
      state.documentSpecs.securityFeatures = action.payload;
    })
    .addCase(actions.projectSetDocumentScore, (state, action) => {
      state.documentScore = action.payload;
    });
});
