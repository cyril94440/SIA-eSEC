import { Rpc } from "@@core/rpc/shared";

export function formatDocumentSecurityFeatureLocationString(value: Rpc.SFLocation): string {
  switch (value) {
    case Rpc.SFLocation.DocumentBody:
      return "Document Body";
    case Rpc.SFLocation.InksBackground:
      return "Inks Background";
    case Rpc.SFLocation.InksTechPersonalization:
      return "Inks Tech Personalization";
    case Rpc.SFLocation.SecurityDesign:
      return "Security Design";
    case Rpc.SFLocation.SFPersonalization:
      return "Security Feature Personalization";
  }
}
