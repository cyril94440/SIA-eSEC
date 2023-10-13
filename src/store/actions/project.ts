import { createAction } from "@reduxjs/toolkit";
import { DocumentStandardTarget, ProjectSpecs } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";

export const projectInitEmpty = createAction("projectInitEmpty");
export const projectInitExisting = createAction<ProjectSpecs>("projectInitExisting");
export const projectSetTitle = createAction<string>("projectSetTitle");
export const projectSetScore = createAction<Rpc.TNScore>("projectSetScore");
export const projectSetSecurityFeatures = createAction<Rpc.SecurityFeature[]>("projectSetSecurityFeatures");
export const projectSetDocumentType = createAction<Rpc.SFDocumentType>("projectSetDocumentType");
export const projectSetDocumentStandardTarget = createAction<DocumentStandardTarget>(
  "projectSetDocumentStandardTarget"
);
export const projectSetDocumentDesignAnswer = createAction<Rpc.DocumentDesignFormAnswer>(
  "projectSetDocumentDesignAnswer"
);
export const projectSetDocumentSecurityFeatureIds = createAction<number[]>("projectSetDocumentSecurityFeatureIds");
