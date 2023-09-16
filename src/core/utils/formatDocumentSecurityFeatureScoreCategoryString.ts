import { SFScoreCategory } from "@@rpc/shared";

export function formatDocumentSecurityFeatureScoreCategoryString(value: SFScoreCategory): string {
  switch (value) {
    case SFScoreCategory.ABC:
      return "ABC";
    case SFScoreCategory.Alteration:
      return "Alteration";
    case SFScoreCategory.Counterfeit:
      return "Counterfeit";
    case SFScoreCategory.Impostor:
      return "Impostor";
    case SFScoreCategory.Level1:
      return "Level 1";
    case SFScoreCategory.Level2:
      return "Level 2";
    case SFScoreCategory.Level3:
      return "Level 3";
    case SFScoreCategory.Recycling:
      return "Recycling";
    case SFScoreCategory.Stealing:
      return "Stealing";
  }
}
