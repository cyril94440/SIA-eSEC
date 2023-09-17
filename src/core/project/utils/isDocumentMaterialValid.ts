import { Rpc } from "@@core/rpc/shared";
import { DocumentType } from "../types";

export function isDocumentMaterialValid(value: Rpc.SFMaterial, type: DocumentType): boolean {
  switch (value) {
    case Rpc.SFMaterial.Paper:
      return type === DocumentType.PASSPORT;
    case Rpc.SFMaterial.Plastic:
      return true;
  }
}
