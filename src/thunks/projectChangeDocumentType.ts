import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentType, getDefaultDocumentMaterial, isDocumentMaterialValid } from "../core/project";
import { actions, RootState } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentType = createAsyncThunk<void, DocumentType>(
  "projectChangeDocumentType",
  async (value, { dispatch, getState }) => {
    const { project } = getState() as RootState;
    dispatch(actions.projectSetDocumentType(value));
    if (!isDocumentMaterialValid(project.specs.document.material, value)) {
      dispatch(actions.projectSetDocumentMaterial(getDefaultDocumentMaterial(value)));
    }
    dispatch(projectUpdateDocumentScore());
  }
);
