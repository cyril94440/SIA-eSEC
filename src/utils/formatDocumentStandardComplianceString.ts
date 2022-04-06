import { DocumentStandardCompliance } from "@@types";

export function formatDocumentStandardComplianceString(value: DocumentStandardCompliance): string {
  switch (value) {
    case DocumentStandardCompliance.ECOWAS_ID_CARD:
      return "ECOWAS ID Card";
    case DocumentStandardCompliance.EU_ID_CARD:
      return "EU ID Card";
    case DocumentStandardCompliance.EU_PASSPORT:
      return "EU Passport";
    case DocumentStandardCompliance.EU_RESIDENT_PERMIT:
      return "EU Resident permit";
    case DocumentStandardCompliance.ICAO:
      return "ICAO";
    default:
      throw new Error(`Unhandled document standard compliance: "${value}"`);
  }
}
