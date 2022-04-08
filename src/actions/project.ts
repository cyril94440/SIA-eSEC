import { createAction } from "@reduxjs/toolkit";
import {
  DocumentMaterial,
  DocumentScore,
  DocumentScoreTarget,
  DocumentSecurityFeature,
  DocumentStandardCompliance,
  DocumentType,
} from "@@types";

export const projectSetDocumentType = createAction<DocumentType>("projectSetDocumentType");
export const projectSetDocumentMaterial = createAction<DocumentMaterial>("projectSetDocumentMaterial");
export const projectSetDocumentStandardCompliance = createAction<DocumentStandardCompliance>(
  "projectSetDocumentStandardCompliance"
);
export const projectSetDocumentScoreTarget = createAction<DocumentScoreTarget>("projectSetDocumentScoreTarget");
export const projectSetDocumentDesignAnswer1 = createAction<boolean>("projectSetDocumentDesignAnswer1");
export const projectSetDocumentDesignAnswer2 = createAction<boolean>("projectSetDocumentDesignAnswer2");
export const projectSetDocumentSecurityFeatures = createAction<DocumentSecurityFeature[]>(
  "projectSetDocumentSecurityFeatures"
);
export const projectSetDocumentScore = createAction<DocumentScore>("projectSetDocumentScore");
