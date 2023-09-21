import { Rpc } from "@@core/rpc/shared";
import { ProjectSpecs } from "../types";
import { getDocumentSecurityFeatures } from "./getDocumentSecurityFeatures";

export function getDocumentSelectedSecurityFeatures(
  specs: ProjectSpecs,
  allFeatures: Rpc.SecurityFeature[]
): Rpc.SecurityFeature[] {
  const availableFeatures = getDocumentSecurityFeatures(specs, allFeatures);
  const selectedFeatureIdSet = new Set(specs.document.securityFeatureIds);
  return availableFeatures.filter((f) => selectedFeatureIdSet.has(f.id));
}
