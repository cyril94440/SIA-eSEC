import { ProjectFile, ProjectSpecs } from "../../types";
import { parseV1 } from "./parsers/parse-v1";

export function parseProjectFile(data: ProjectFile.Root): ProjectSpecs {
  switch (data.version) {
    case 1:
      return parseV1(data.content);
  }
}
