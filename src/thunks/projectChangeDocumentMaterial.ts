import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { DocumentMaterial } from "@@types";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentMaterial = createAsyncThunk<void, DocumentMaterial>(
  "projectChangeDocumentMaterial",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentMaterial(value));
    dispatch(projectUpdateDocumentScore());
  }
);
