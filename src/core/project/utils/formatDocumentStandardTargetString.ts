import { DocumentStandardTarget } from "../types";

export function formatDocumentStandardTargetString(value: DocumentStandardTarget): string {
  switch (value) {
    case DocumentStandardTarget.ECOWAS_ID_CARD:
      return "ECOWAS ID Card (Not available yet)";
    case DocumentStandardTarget.EU_ID_CARD:
      return "EU ID Card (Not available yet)";
    case DocumentStandardTarget.EU_PASSPORT:
      return "EU Passport (Not available yet)";
    case DocumentStandardTarget.EU_RESIDENT_PERMIT:
      return "EU Resident permit (Not available yet)";
    case DocumentStandardTarget.ICAO_DOC_9303:
      return "ICAO doc 9303 (part 2)";
  }
}
