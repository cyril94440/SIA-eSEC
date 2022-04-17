import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentType } from "@@core";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentType = createAsyncThunk<void, DocumentType>(
  "projectChangeDocumentType",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentType(value));
    dispatch(projectUpdateDocumentScore());
  }
);
