import { Rpc } from "@@core/rpc/shared";
import { DocumentType } from "../types";

export function getDefaultDocumentMaterial(_: DocumentType): Rpc.SFMaterial {
  return Rpc.SFMaterial.Plastic;
}
