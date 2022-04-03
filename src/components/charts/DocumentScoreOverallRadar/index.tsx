import { VFC } from 'react'
import { ScoreRadar } from '../ScoreRadar'
import { DocumentScoreOverall } from '../../../types'

export interface DocumentScoreOverallRadarProps {
  value: DocumentScoreOverall
  targetValue: DocumentScoreOverall
}

export const DocumentScoreOverallRadar: VFC<DocumentScoreOverallRadarProps> = ({ value, targetValue }) => {
  return (
    <ScoreRadar
      labels={['Distribution', 'Protection against threats', 'Security level coverage', 'Design']}
      values={[value.distribution, value.threatsProtection, value.levelsCoverage, value.design]}
      targetValues={[targetValue.distribution, targetValue.threatsProtection, targetValue.levelsCoverage, targetValue.design]}
    />
  )
}
