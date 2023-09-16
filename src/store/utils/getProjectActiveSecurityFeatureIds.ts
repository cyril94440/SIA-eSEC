import { RootState } from "../reducers";

export function getProjectActiveSecurityFeatureIds(state: RootState): number[] {
  const items = state.project.securityFeatures;
  const ids = state.project.specs.document.securityFeatureIds;
  const material = state.project.specs.document.material;

  if (!items) {
    return [];
  }

  const itemMaterials = new Map(items.map((i) => [i.id, new Set(i.materialsCompatible)]));
  return ids.filter((id) => itemMaterials.get(id)?.has(material) ?? false);
}
