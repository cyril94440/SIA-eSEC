import { createReducer } from "@reduxjs/toolkit";
import * as api from "@@api";
import {
  DocumentMaterial,
  DocumentScore,
  DocumentScoreTarget,
  DocumentSecurityFeature,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType,
  ProjectStatus,
} from "@@core";
import * as actions from "../actions";

interface ProjectState {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  documentScore: DocumentScore | null;
  documentDesignQuestions: api.DocumentDesignQuestion[] | null;
}

const initialState: ProjectState = {
  title: "Test project",
  status: ProjectStatus.ONGOING,
  documentSpecs: {
    type: DocumentType.PASSPORT,
    material: DocumentMaterial.PAPER,
    standardCompliance: DocumentStandardCompliance.EU_PASSPORT,
    scoreTarget: DocumentScoreTarget.SIA_RECO,
    designAnswers: [],
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
  documentDesignQuestions: null,
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
      const answersMap = new Map(answers.map((a) => [a.questionId, a]));
      answersMap.delete(newItem.questionId);
      answersMap.set(newItem.questionId, newItem);
      state.documentSpecs.designAnswers = Array.from(answersMap.values());
    })
    .addCase(actions.projectSetDocumentSecurityFeatures, (state, action) => {
      state.documentSpecs.securityFeatures = action.payload;
    })
    .addCase(actions.projectSetDocumentScore, (state, action) => {
      state.documentScore = action.payload;
    })
    .addCase(actions.projectSetDocumentDesignQuestions, (state, action) => {
      state.documentDesignQuestions = action.payload;
    });
});
