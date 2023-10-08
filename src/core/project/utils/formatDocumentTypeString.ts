import { Rpc } from "@@core/rpc/shared";

export function formatDocumentTypeString(value: Rpc.SFDocumentType): string {
  switch (value) {
    case Rpc.SFDocumentType.Card:
      return "Card";
    case Rpc.SFDocumentType.PassportPaper:
      return "Passport Paper";
    case Rpc.SFDocumentType.PassportPlastic:
      return "Passport Plastic";
  }
}
