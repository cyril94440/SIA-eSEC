import { createAsyncThunk } from "@reduxjs/toolkit";
import { SecurityFeature } from "@@rpc/shared";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentSecurityFeaturesInfo = createAsyncThunk<void, SecurityFeature[]>(
  "projectChangeDocumentSecurityFeaturesInfo",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentSecurityFeaturesInfo(value));
    dispatch(projectUpdateDocumentScore());
  }
);
