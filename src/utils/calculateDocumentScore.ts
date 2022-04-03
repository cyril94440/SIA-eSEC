import {
  DocumentMaterial,
  DocumentScore,
  DocumentScoreTarget,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType
} from '../types'

export async function calculateDocumentScore(specs: DocumentSpecs): Promise<DocumentScore> {
  let value = 0

  switch (specs.type) {
    case DocumentType.DRIVING:
      value += 5
      break
    case DocumentType.ID_CARD:
      value += 10
      break
    case DocumentType.OTHER:
      value += 15
      break
    case DocumentType.PASSPORT:
      value += 20
      break
  }

  switch (specs.material) {
    case DocumentMaterial.PAPER:
      value += 5
      break
    case DocumentMaterial.PLASTIC:
      value += 10
      break
  }

  switch (specs.standardCompliance) {
    case DocumentStandardCompliance.ECOWAS_ID_CARD:
      value += 5
      break
    case DocumentStandardCompliance.EU_ID_CARD:
      value += 10
      break
    case DocumentStandardCompliance.EU_PASSPORT:
      value += 15
      break
    case DocumentStandardCompliance.EU_RESIDENT_PERMIT:
      value += 20
      break
    case DocumentStandardCompliance.ICAO:
      value += 25
      break
  }

  switch (specs.scoreTarget) {
    case DocumentScoreTarget.SIA_RECO:
      value += 5
      break
    case DocumentScoreTarget.THEORICAL_MAXIMUM:
      value += 10
      break
  }

  return {
    value,
    overall: {
      design: 80,
      distribution: 75,
      levelsCoverage: 75,
      threatsProtection: 50,
    },
    overallTarget: {
      design: 75,
      distribution: 70,
      levelsCoverage: 75,
      threatsProtection: 75,
    },
    distribution: {
      body: 80,
      design: 85,
      personalization: 60,
    },
    distributionTarget: {
      body: 40,
      design: 60,
      personalization: 80,
    },
    threatsProtection: {
      alteration: 60,
      counterfeit: 70,
      imposter: 35,
      recycling: 65,
      stealing: 0,
    },
    threatsProtectionTarget: {
      alteration: 80,
      counterfeit: 60,
      imposter: 20,
      recycling: 15,
      stealing: 15,
    },
    levelsCoverage: {
      level1: 60,
      level2: 70,
      level3: 70,
      madsv: 80,
    },
    levelsCoverageTarget: {
      level1: 85,
      level2: 70,
      level3: 60,
      madsv: 20,
    },
  }
}
