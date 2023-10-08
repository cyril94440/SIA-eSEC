import { Rpc } from "@@core/rpc/shared";
import { ProjectSpecs } from "../types";

export function getDocumentSecurityFeatures(
  specs: ProjectSpecs,
  allFeatures: Rpc.SecurityFeature[]
): Rpc.SecurityFeature[] {
  return allFeatures.filter((f) => f.documentsCompatible.some((m) => m === specs.document.type));
}
