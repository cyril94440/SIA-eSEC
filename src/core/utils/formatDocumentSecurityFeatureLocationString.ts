import { SFLocation, sFLocationToJSON } from "@@api/common";

export function formatDocumentSecurityFeatureLocationString(value: SFLocation): string {
  switch (value) {
    case SFLocation.DocumentBody:
      return "Document Body";
    case SFLocation.InksBackground:
      return "Inks Background";
    case SFLocation.InksTechPersonalization:
      return "Inks Tech Personalization";
    case SFLocation.SecurityDesign:
      return "Security Design";
    case SFLocation.SFPersonalization:
      return "Security Feature Personalization";
    case SFLocation.UNRECOGNIZED:
      return "Unrecognized";
    default:
      throw new Error(`Unhandled document security feature location: "${sFLocationToJSON(value)}"`);
  }
}
