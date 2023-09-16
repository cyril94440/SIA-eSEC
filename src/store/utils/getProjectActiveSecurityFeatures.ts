import { SecurityFeature } from "@@rpc/shared";
import { RootState } from "../reducers";

export function getProjectActiveSecurityFeatures(state: RootState): SecurityFeature[] {
  return (
    state.project.securityFeatures.filter((f) =>
      f.materialsCompatible.some((m) => m === state.project.specs.document.material)
    ) ?? null
  );
}
