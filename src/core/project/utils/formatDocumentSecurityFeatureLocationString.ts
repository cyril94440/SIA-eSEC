import { SFLocation } from "../../rpc/shared";

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
  }
}
