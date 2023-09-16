import { createAsyncThunk } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const appNewProject = createAsyncThunk<void, { router: NextRouter }>(
  "appNewProject",
  async (params, { dispatch }) => {
    dispatch(actions.projectInitEmpty());
    dispatch(projectUpdateDocumentScore());
    await params.router.push("/project");
  }
);
