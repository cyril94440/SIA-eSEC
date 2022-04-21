import { createAction } from "@reduxjs/toolkit";
import * as rpc from "@@rpc/shared";
import { DocumentMaterial, DocumentScoreTarget, DocumentStandardCompliance, DocumentType } from "@@core";

export const projectSetDocumentType = createAction<DocumentType>("projectSetDocumentType");
export const projectSetDocumentMaterial = createAction<DocumentMaterial>("projectSetDocumentMaterial");
export const projectSetDocumentStandardCompliance = createAction<DocumentStandardCompliance>(
  "projectSetDocumentStandardCompliance"
);
export const projectSetDocumentScoreTarget = createAction<DocumentScoreTarget>("projectSetDocumentScoreTarget");
export const projectSetDocumentDesignAnswer = createAction<rpc.DocumentDesignFormAnswer>(
  "projectSetDocumentDesignAnswer"
);
export const projectSetDocumentSecurityFeatures = createAction<number[]>("projectSetDocumentSecurityFeatures");
export const projectSetDocumentScore = createAction<rpc.TNScore>("projectSetDocumentScore");
