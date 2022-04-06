import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { DocumentType } from "@@types";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentType = createAsyncThunk<void, DocumentType>(
  "projectChangeDocumentType",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentType(value));
    dispatch(projectUpdateDocumentScore());
  }
);
