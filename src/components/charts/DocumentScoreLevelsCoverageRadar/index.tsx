import { VFC } from 'react'
import { ScoreRadar } from '../ScoreRadar'
import { DocumentScoreLevelsCoverage } from '../../../types'

export interface DocumentScoreLevelsCoverageRadarProps {
  value: DocumentScoreLevelsCoverage
  targetValue: DocumentScoreLevelsCoverage
}

export const DocumentScoreLevelsCoverageRadar: VFC<DocumentScoreLevelsCoverageRadarProps> = ({ value, targetValue }) => {
  return (
    <ScoreRadar
      labels={['Level 1', 'Level 2', 'Level 3', 'MADSV']}
      values={[value.level1, value.level2, value.level3, value.madsv]}
      targetValues={[targetValue.level1, targetValue.level2, targetValue.level3, targetValue.madsv]}
    />
  )
}
