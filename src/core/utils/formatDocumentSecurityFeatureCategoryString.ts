import { SFCategory, sFCategoryToJSON } from "@@api/common";

export function formatDocumentSecurityFeatureCategoryString(value: SFCategory): string {
  switch (value) {
    case SFCategory.Material:
      return "Material";
    case SFCategory.Personalization:
      return "Personalization";
    case SFCategory.Printed:
      return "Printed";
    case SFCategory.Structure:
      return "Structure";
    case SFCategory.UNRECOGNIZED:
      return "Unrecognized";
    default:
      throw new Error(`Unhandled document security feature category: "${sFCategoryToJSON(value)}"`);
  }
}
