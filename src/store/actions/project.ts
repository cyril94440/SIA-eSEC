import { createAction } from "@reduxjs/toolkit";
import * as api from "@@api";
import {
  DocumentDesignAnswer,
  DocumentMaterial,
  DocumentScore,
  DocumentScoreTarget,
  DocumentSecurityFeature,
  DocumentStandardCompliance,
  DocumentType,
} from "@@core";

export const projectSetDocumentType = createAction<DocumentType>("projectSetDocumentType");
export const projectSetDocumentMaterial = createAction<DocumentMaterial>("projectSetDocumentMaterial");
export const projectSetDocumentStandardCompliance = createAction<DocumentStandardCompliance>(
  "projectSetDocumentStandardCompliance"
);
export const projectSetDocumentScoreTarget = createAction<DocumentScoreTarget>("projectSetDocumentScoreTarget");
export const projectSetDocumentDesignAnswer = createAction<DocumentDesignAnswer>("projectSetDocumentDesignAnswer");
export const projectSetDocumentSecurityFeatures = createAction<DocumentSecurityFeature[]>(
  "projectSetDocumentSecurityFeatures"
);
export const projectSetDocumentScore = createAction<DocumentScore>("projectSetDocumentScore");
export const projectSetDocumentDesignQuestions = createAction<api.DocumentDesignQuestion[]>(
  "projectSetDocumentDesignQuestions"
);
