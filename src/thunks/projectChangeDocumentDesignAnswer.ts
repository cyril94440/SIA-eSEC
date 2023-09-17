import { createAsyncThunk } from "@reduxjs/toolkit";
import { Rpc } from "@@core/rpc/shared";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentDesignAnswer = createAsyncThunk<void, Rpc.DocumentDesignFormAnswer>(
  "projectChangeDocumentDesignAnswer",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentDesignAnswer(value));
    dispatch(projectUpdateDocumentScore());
  }
);
