import { DocumentType } from './DocumentType'
import { DocumentMaterial } from './DocumentMaterial'
import { DocumentStandardCompliance } from './DocumentStandardCompliance'
import { DocumentScoreTarget } from './DocumentScoreTarget'

export interface DocumentSpecs {
  type: DocumentType
  material: DocumentMaterial
  standardCompliance: DocumentStandardCompliance
  scoreTarget: DocumentScoreTarget
}
