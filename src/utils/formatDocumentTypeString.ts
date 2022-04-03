import { DocumentType } from '../types'

export function formatDocumentTypeString(value: DocumentType): string {
  switch (value) {
    case DocumentType.DRIVING:
      return 'Driving'
    case DocumentType.ID_CARD:
      return 'ID Card'
    case DocumentType.OTHER:
      return 'Other'
    case DocumentType.PASSPORT:
      return 'Passport'
    default:
      throw new Error(`Unhandled document type: "${value}"`)
  }
}
