import { DocumentType } from "../types";

export function formatDocumentTypeString(value: DocumentType): string {
  switch (value) {
    case DocumentType.DRIVING_LICENSE:
      return "Driving License";
    case DocumentType.ID_CARD:
      return "ID Card";
    case DocumentType.OTHER:
      return "Other";
    case DocumentType.PASSPORT:
      return "Passport";
  }
}
