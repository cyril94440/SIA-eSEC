import { DocumentMaterial } from "@@types";

export function formatDocumentMaterialString(value: DocumentMaterial): string {
  switch (value) {
    case DocumentMaterial.PAPER:
      return "Paper";
    case DocumentMaterial.PLASTIC:
      return "Plastic";
    default:
      throw new Error(`Unhandled document material: "${value}"`);
  }
}
