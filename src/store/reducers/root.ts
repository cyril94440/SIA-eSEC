import { AppState, app } from "./app";
import { ProfileState, profile } from "./profile";
import { ProjectState, project } from "./project";

export type RootState = {
  app: AppState;
  profile: ProfileState;
  project: ProjectState;
};

export const root = {
  app,
  profile,
  project,
};
