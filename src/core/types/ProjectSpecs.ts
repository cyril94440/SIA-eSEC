import { DocumentSpecs } from "./DocumentSpecs";
import { ProjectStatus } from "./ProjectStatus";

export interface ProjectSpecs {
  title: string;
  status: ProjectStatus;
  document: DocumentSpecs;
}
