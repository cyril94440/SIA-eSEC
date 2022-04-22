import { SFMaterial } from "@@rpc/shared";

export function formatDocumentMaterialString(value: SFMaterial): string {
  switch (value) {
    case SFMaterial.Paper:
      return "Paper";
    case SFMaterial.Plastic:
      return "Plastic";
    default:
      return "Unrecognized";
  }
}
