import { RootState } from "../reducers";

export function getProjectActiveSecurityFeatureIds(state: RootState): number[] {
  const ids = state.project.documentSpecs.securityFeatures;
  const items = state.project.documentSecurityFeaturesInfo;
  const material = state.project.documentSpecs.material;

  if (!items) {
    return [];
  }

  const itemMaterials = new Map(items.map((i) => [i.id, new Set(i.materialsCompatible)]));
  return ids.filter((id) => itemMaterials.get(id)?.has(material) ?? false);
}
