import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentScoreTarget } from "@@core/project";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentScoreTarget = createAsyncThunk<void, DocumentScoreTarget>(
  "projectChangeDocumentScoreTarget",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentScoreTarget(value));
    dispatch(projectUpdateDocumentScore());
  }
);
