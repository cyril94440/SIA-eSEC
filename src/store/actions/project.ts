import { createAction } from "@reduxjs/toolkit";
import * as rpc from "@@rpc/shared";
import { DocumentScoreTarget, DocumentStandardCompliance, DocumentType, ProjectSpecs } from "@@core";

export const projectInitEmpty = createAction("projectInitEmpty");
export const projectInitExisting = createAction<ProjectSpecs>("projectInitExisting");
export const projectSetScore = createAction<rpc.TNScore>("projectSetScore");
export const projectSetSecurityFeatures = createAction<rpc.SecurityFeature[]>("projectSetSecurityFeatures");
export const projectSetDocumentType = createAction<DocumentType>("projectSetDocumentType");
export const projectSetDocumentMaterial = createAction<rpc.SFMaterial>("projectSetDocumentMaterial");
export const projectSetDocumentStandardCompliance = createAction<DocumentStandardCompliance>(
  "projectSetDocumentStandardCompliance"
);
export const projectSetDocumentScoreTarget = createAction<DocumentScoreTarget>("projectSetDocumentScoreTarget");
export const projectSetDocumentDesignAnswer = createAction<rpc.DocumentDesignFormAnswer>(
  "projectSetDocumentDesignAnswer"
);
export const projectSetDocumentSecurityFeatureIds = createAction<number[]>("projectSetDocumentSecurityFeatureIds");
