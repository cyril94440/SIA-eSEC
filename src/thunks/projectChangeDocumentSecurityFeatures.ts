import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentSecurityFeatures = createAsyncThunk<void, number[]>(
  "projectChangeDocumentSecurityFeatures",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentSecurityFeatureIds(value));
    dispatch(projectUpdateDocumentScore());
  }
);
