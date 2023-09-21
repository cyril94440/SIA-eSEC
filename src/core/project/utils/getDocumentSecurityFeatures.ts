import { Rpc } from "@@core/rpc/shared";
import { ProjectSpecs } from "../types";

export function getDocumentSecurityFeatures(
  specs: ProjectSpecs,
  allFeatures: Rpc.SecurityFeature[]
): Rpc.SecurityFeature[] {
  return allFeatures.filter((f) => f.materialsCompatible.some((m) => m === specs.document.material));
}
