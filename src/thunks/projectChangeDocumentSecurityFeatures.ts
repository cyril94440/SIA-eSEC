import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentSecurityFeature } from "@@core";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentSecurityFeatures = createAsyncThunk<void, DocumentSecurityFeature[]>(
  "projectChangeDocumentSecurityFeatures",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentSecurityFeatures(value));
    dispatch(projectUpdateDocumentScore());
  }
);
