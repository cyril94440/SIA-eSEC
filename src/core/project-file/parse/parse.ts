import { ProjectSpecs } from "@@core/project";
import { Root } from "../types";
import { parseV1 } from "./parsers/parse-v1";
import { parseV2 } from "./parsers/parse-v2";
import { parseV3 } from "./parsers/parse-v3";

export function parse(data: Root): ProjectSpecs {
  switch (data.version) {
    case 1:
      return parseV1(data.content);
    case 2:
      return parseV2(data.content);
    case 3:
      return parseV3(data.content);
  }
}
