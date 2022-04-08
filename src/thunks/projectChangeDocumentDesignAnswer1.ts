import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentDesignAnswer1 = createAsyncThunk<void, boolean>(
  "projectChangeDocumentDesignAnswer1",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentDesignAnswer1(value));
    dispatch(projectUpdateDocumentScore());
  }
);
