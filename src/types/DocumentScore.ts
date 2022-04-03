import { DocumentScoreDistribution } from './DocumentScoreDistribution'
import { DocumentScoreLevelsCoverage } from './DocumentScoreLevelsCoverage'
import { DocumentScoreOverall } from './DocumentScoreOverall'
import { DocumentScoreThreatsProtection } from './DocumentScoreThreatsProtection'

export interface DocumentScore {
  value: number
  overall: DocumentScoreOverall
  overallTarget: DocumentScoreOverall
  distribution: DocumentScoreDistribution
  distributionTarget: DocumentScoreDistribution
  threatsProtection: DocumentScoreThreatsProtection
  threatsProtectionTarget: DocumentScoreThreatsProtection
  levelsCoverage: DocumentScoreLevelsCoverage
  levelsCoverageTarget: DocumentScoreLevelsCoverage
}
