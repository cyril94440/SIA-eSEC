import { ProjectSpecs } from "@@core/project";
import { Root } from "../types";
import { parseV1 } from "./parsers/parse-v1";

export function parse(data: Root): ProjectSpecs {
  switch (data.version) {
    case 1:
      return parseV1(data.content);
  }
}
