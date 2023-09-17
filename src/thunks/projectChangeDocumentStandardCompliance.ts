import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentStandardCompliance } from "@@core/project";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentStandardCompliance = createAsyncThunk<void, DocumentStandardCompliance>(
  "projectChangeDocumentStandardCompliance",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentStandardCompliance(value));
    dispatch(projectUpdateDocumentScore());
  }
);
