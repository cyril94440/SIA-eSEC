import { Rpc } from "@@core/rpc/shared";

export function formatDocumentSecurityFeatureCategoryString(value: Rpc.SFCategory): string {
  switch (value) {
    case Rpc.SFCategory.Material:
      return "Material";
    case Rpc.SFCategory.Personalization:
      return "Personalization";
    case Rpc.SFCategory.Printed:
      return "Printed";
    case Rpc.SFCategory.Structure:
      return "Structure";
  }
}
