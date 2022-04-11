import { createAction } from "@reduxjs/toolkit";

export const appSetLoaded = createAction<boolean>("appSetLoaded");
export const appSetSidenavMinimized = createAction<boolean>("appSetSidenavMinimized");
