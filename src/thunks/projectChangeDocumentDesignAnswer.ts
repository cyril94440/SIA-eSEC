import { createAsyncThunk } from "@reduxjs/toolkit";
import * as rpc from "../core/rpc/shared";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const projectChangeDocumentDesignAnswer = createAsyncThunk<void, rpc.DocumentDesignFormAnswer>(
  "projectChangeDocumentDesignAnswer",
  async (value, { dispatch }) => {
    dispatch(actions.projectSetDocumentDesignAnswer(value));
    dispatch(projectUpdateDocumentScore());
  }
);
