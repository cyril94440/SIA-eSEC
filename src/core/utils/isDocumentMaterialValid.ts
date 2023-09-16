import { SFMaterial } from "@@rpc/shared";
import { DocumentType } from "../types";

export function isDocumentMaterialValid(value: SFMaterial, type: DocumentType): boolean {
  switch (value) {
    case SFMaterial.Paper:
      return type === DocumentType.PASSPORT;
    case SFMaterial.Plastic:
      return true;
  }
}
