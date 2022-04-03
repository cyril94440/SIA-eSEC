import { Box, Flex, Heading, Select, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import Head from 'next/head'
import { ChangeEventHandler, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  DocumentScoreDistributionRadar,
  DocumentScoreLevelsCoverageRadar,
  DocumentScoreOverallRadar,
  DocumentScoreThreatsProtectionRadar
} from '../components'
import { RootState } from '../store'
import * as thunks from '../thunks'
import { DocumentMaterial, DocumentScoreTarget, DocumentStandardCompliance, DocumentType } from '../types'
import {
  formatDocumentMaterialString, formatDocumentScoreTargetString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString
} from '../utils'

const Project: NextPage = () => {
  const dispatch = useDispatch()
  const title = useSelector((state: RootState) => state.project.title)
  const documentSpecs = useSelector((state: RootState) => state.project.documentSpecs)
  const documentScore = useSelector((state: RootState) => state.project.documentScore)

  useEffect(() => {
    dispatch(thunks.projectLoad())
  }, [dispatch])

  const handleChangeDocumentType = useCallback<ChangeEventHandler<HTMLSelectElement>>(e => {
    dispatch(thunks.projectChangeDocumentType(e.target.value as DocumentType))
  }, [dispatch])

  const handleChangeDocumentMaterial = useCallback<ChangeEventHandler<HTMLSelectElement>>(e => {
    dispatch(thunks.projectChangeDocumentMaterial(e.target.value as DocumentMaterial))
  }, [dispatch])

  const handleChangeDocumentStandardCompliance = useCallback<ChangeEventHandler<HTMLSelectElement>>(e => {
    dispatch(thunks.projectChangeDocumentStandardCompliance(e.target.value as DocumentStandardCompliance))
  }, [dispatch])

  const handleChangeDocumentScoreTarget = useCallback<ChangeEventHandler<HTMLSelectElement>>(e => {
    dispatch(thunks.projectChangeDocumentScoreTarget(e.target.value as DocumentScoreTarget))
  }, [dispatch])

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Box>
        <Heading textAlign={'center'} p={4}>{title}</Heading>
        <Flex>
          <Box flex={1} p={4}>
            <VStack spacing={4}>
              <Select value={documentSpecs.type} onChange={handleChangeDocumentType}>
                {
                  [
                    DocumentType.PASSPORT,
                    DocumentType.ID_CARD,
                    DocumentType.DRIVING,
                    DocumentType.OTHER,
                  ].map(value => (
                    <option key={value} value={value}>
                      {formatDocumentTypeString(value)}
                    </option>
                  ))
                }
              </Select>
              <Select value={documentSpecs.material} onChange={handleChangeDocumentMaterial}>
                {
                  [
                    DocumentMaterial.PAPER,
                    DocumentMaterial.PLASTIC,
                  ].map(material => (
                    <option key={material} value={material}>
                      {formatDocumentMaterialString(material)}
                    </option>
                  ))
                }
              </Select>
              <Select value={documentSpecs.standardCompliance} onChange={handleChangeDocumentStandardCompliance}>
                {
                  [
                    DocumentStandardCompliance.ECOWAS_ID_CARD,
                    DocumentStandardCompliance.EU_ID_CARD,
                    DocumentStandardCompliance.EU_PASSPORT,
                    DocumentStandardCompliance.EU_RESIDENT_PERMIT,
                    DocumentStandardCompliance.ICAO,
                  ].map(value => (
                    <option key={value} value={value}>
                      {formatDocumentStandardComplianceString(value)}
                    </option>
                  ))
                }
              </Select>
              <Select value={documentSpecs.scoreTarget} onChange={handleChangeDocumentScoreTarget}>
                {
                  [DocumentScoreTarget.THEORICAL_MAXIMUM, DocumentScoreTarget.SIA_RECO].map(value => (
                    <option key={value} value={value}>
                      {formatDocumentScoreTargetString(value)}
                    </option>
                  ))
                }
              </Select>
            </VStack>
          </Box>
          <Box flex={1}>
            {
              documentScore && (
                <>
                  <Heading textAlign={'center'} p={4}>
                    {documentScore ? documentScore.value : ''}
                  </Heading>
                  <Box>
                    <DocumentScoreOverallRadar
                      value={documentScore.overall}
                      targetValue={documentScore.overallTarget}
                    />
                    <DocumentScoreDistributionRadar
                      value={documentScore.distribution}
                      targetValue={documentScore.distributionTarget}
                    />
                    <DocumentScoreThreatsProtectionRadar
                      value={documentScore.threatsProtection}
                      targetValue={documentScore.threatsProtectionTarget}
                    />
                    <DocumentScoreLevelsCoverageRadar
                      value={documentScore.levelsCoverage}
                      targetValue={documentScore.levelsCoverageTarget}
                    />
                  </Box>
                </>
              )
            }
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Project
