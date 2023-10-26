import { Rpc } from "@@core/rpc/shared";

export function formatDocumentSecurityFeatureScoreCategoryString(value: Rpc.SFScoreCategory): string {
  switch (value) {
    case Rpc.SFScoreCategory.ABC:
      return "Automatic Border Control";
    case Rpc.SFScoreCategory.Alteration:
      return "Alteration";
    case Rpc.SFScoreCategory.Counterfeit:
      return "Counterfeit";
    case Rpc.SFScoreCategory.Impostor:
      return "Impostor";
    case Rpc.SFScoreCategory.Level1:
      return "Level 1";
    case Rpc.SFScoreCategory.Level2:
      return "Level 2";
    case Rpc.SFScoreCategory.Level3:
      return "Level 3";
    case Rpc.SFScoreCategory.Recycling:
      return "Recycling";
    case Rpc.SFScoreCategory.Stealing:
      return "Stealing";
  }
}
