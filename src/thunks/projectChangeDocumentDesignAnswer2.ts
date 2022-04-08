import { createAsyncThunk } from "@reduxjs/toolkit";
import * as actions from "@@actions";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentDesignAnswer2 = createAsyncThunk<void, boolean>(
  "projectChangeDocumentDesignAnswer2",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentDesignAnswer2(value));
    dispatch(projectUpdateDocumentScore());
  }
);
