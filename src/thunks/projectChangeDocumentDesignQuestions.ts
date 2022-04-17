import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "@@api";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentDesignQuestions = createAsyncThunk<void, api.DocumentDesignQuestion[]>(
  "projectChangeDocumentDesignQuestions",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentDesignQuestions(value));
    dispatch(projectUpdateDocumentScore());
  }
);
