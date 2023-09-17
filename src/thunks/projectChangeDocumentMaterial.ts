import { createAsyncThunk } from "@reduxjs/toolkit";
import { Rpc } from "@@core/rpc/shared";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentMaterial = createAsyncThunk<void, Rpc.SFMaterial>(
  "projectChangeDocumentMaterial",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentMaterial(value));
    dispatch(projectUpdateDocumentScore());
  }
);
