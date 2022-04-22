import { SecurityFeature } from "@@rpc/shared";
import { RootState } from "../reducers";

export function getProjectActiveSecurityFeatures(state: RootState): SecurityFeature[] {
  return (
    state.project.documentSecurityFeaturesInfo.filter((f) =>
      f.materialsCompatible.some((m) => m === state.project.documentSpecs.material)
    ) ?? null
  );
}
