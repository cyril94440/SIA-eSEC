import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { DocumentScoreTarget } from "@@types";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentScoreTarget = createAsyncThunk<void, DocumentScoreTarget>(
  "projectChangeDocumentScoreTarget",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentScoreTarget(value));
    dispatch(projectUpdateDocumentScore());
  }
);
