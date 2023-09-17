import { createAsyncThunk } from "@reduxjs/toolkit";
import { SecurityFeature } from "../core/rpc/shared";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeSecurityFeatures = createAsyncThunk<void, SecurityFeature[]>(
  "projectChangeSecurityFeatures",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetSecurityFeatures(value));
    dispatch(projectUpdateDocumentScore());
  }
);
