import { createAsyncThunk } from "@reduxjs/toolkit";
import { Rpc } from "@@core/rpc/shared";
import { actions, RootState } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentType = createAsyncThunk<void, Rpc.SFDocumentType>(
  "projectChangeDocumentType",
  async (value, { dispatch, getState }) => {
    dispatch(actions.projectSetDocumentType(value));
    dispatch(projectUpdateDocumentScore());
  }
);
