import { DocumentScoreTarget } from "@@types";

export function formatDocumentScoreTargetString(value: DocumentScoreTarget): string {
  switch (value) {
    case DocumentScoreTarget.SIA_RECO:
      return "SIA Reco";
    case DocumentScoreTarget.THEORICAL_MAXIMUM:
      return "Theorical maximum";
    default:
      throw new Error(`Unhandled document score target: "${value}"`);
  }
}
