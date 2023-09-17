import { Rpc } from "@@core/rpc/shared";

export function formatDocumentMaterialString(value: Rpc.SFMaterial): string {
  switch (value) {
    case Rpc.SFMaterial.Paper:
      return "Paper";
    case Rpc.SFMaterial.Plastic:
      return "Plastic";
  }
}
