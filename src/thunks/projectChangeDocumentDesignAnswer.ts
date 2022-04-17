import { createAsyncThunk } from "@reduxjs/toolkit";
import { DocumentDesignAnswer } from "@@core";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentDesignAnswer = createAsyncThunk<void, DocumentDesignAnswer>(
  "projectChangeDocumentDesignAnswer",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentDesignAnswer(value));
    dispatch(projectUpdateDocumentScore());
  }
);
