import { DocumentScoreTarget } from "../types";

export function formatDocumentScoreTargetString(value: DocumentScoreTarget): string {
  switch (value) {
    case DocumentScoreTarget.ICAO:
      return "ICAO Doc 9393 (part 2)";
    case DocumentScoreTarget.None:
      return "None";
  }
}
