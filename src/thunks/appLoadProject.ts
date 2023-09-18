import { createAsyncThunk } from "@reduxjs/toolkit";
import { NextRouter } from "next/router";
import { ProjectSpecs } from "@@core/project";
import { actions } from "@@store";
import { projectUpdateDocumentScore } from "./projectUpdateDocumentScore";

export const appLoadProject = createAsyncThunk<void, { specs: ProjectSpecs; router: NextRouter }>(
  "appLoadProject",
  async (params, { dispatch }) => {
    dispatch(actions.projectInitExisting(params.specs));
    dispatch(projectUpdateDocumentScore());
    await params.router.push("/project");
  }
);
