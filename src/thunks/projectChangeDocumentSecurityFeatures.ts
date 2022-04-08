import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";
import { DocumentSecurityFeature } from "@@types";

export const projectChangeDocumentSecurityFeatures = createAsyncThunk<void, DocumentSecurityFeature[]>(
  "projectChangeDocumentSecurityFeatures",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentSecurityFeatures(value));
    dispatch(projectUpdateDocumentScore());
  }
);
