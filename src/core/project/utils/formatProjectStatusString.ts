import { ProjectStatus } from "../types";

export function formatProjectStatusString(value: ProjectStatus): string {
  switch (value) {
    case ProjectStatus.ONGOING:
      return "On going";
  }
}
