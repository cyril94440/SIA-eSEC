import { SFCategory } from "@@rpc/shared";

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
  }
}
