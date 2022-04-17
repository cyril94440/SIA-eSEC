import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentMaterial } from "@@core";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentMaterial = createAsyncThunk<void, DocumentMaterial>(
  "projectChangeDocumentMaterial",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentMaterial(value));
    dispatch(projectUpdateDocumentScore());
  }
);
