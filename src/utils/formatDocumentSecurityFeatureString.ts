import { DocumentSecurityFeature } from "@@types";

export function formatDocumentSecurityFeatureString(value: DocumentSecurityFeature): string {
  switch (value) {
    case DocumentSecurityFeature.IR_A:
      return "IR A";
    case DocumentSecurityFeature.IR_B:
      return "IR B";
    case DocumentSecurityFeature.IR_C:
      return "IR C";
    case DocumentSecurityFeature.IR_D:
      return "IR D";
    case DocumentSecurityFeature.IR_E:
      return "IR E";
    case DocumentSecurityFeature.IR_F:
      return "IR F";
    case DocumentSecurityFeature.OFFSET_DESIGN_A:
      return "Offset design A";
    case DocumentSecurityFeature.OFFSET_DESIGN_B:
      return "Offset design B";
    case DocumentSecurityFeature.OFFSET_DESIGN_C:
      return "Offset design C";
    case DocumentSecurityFeature.OFFSET_DESIGN_D:
      return "Offset design D";
    case DocumentSecurityFeature.OFFSET_DESIGN_E:
      return "Offset design E";
    case DocumentSecurityFeature.OFFSET_DESIGN_F:
      return "Offset design F";
    case DocumentSecurityFeature.OFFSET_DESIGN_G:
      return "Offset design G";
    case DocumentSecurityFeature.OFFSET_DESIGN_H:
      return "Offset design H";
    default:
      throw new Error(`Unhandled document security feature: "${value}"`);
  }
}
