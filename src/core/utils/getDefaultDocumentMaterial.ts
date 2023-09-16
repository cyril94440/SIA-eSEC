import { SFMaterial } from "@@rpc/shared";
import { DocumentType } from "../types";

export function getDefaultDocumentMaterial(_: DocumentType): SFMaterial {
  return SFMaterial.Plastic;
}
