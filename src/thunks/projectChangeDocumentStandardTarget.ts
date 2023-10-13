import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentStandardTarget } from "@@core/project";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentStandardTarget = createAsyncThunk<void, DocumentStandardTarget>(
  "projectChangeDocumentStandardTarget",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentStandardTarget(value));
    dispatch(projectUpdateDocumentScore());
  }
);
