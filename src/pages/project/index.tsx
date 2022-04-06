import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CardSelect,
  DocumentScoreDistributionRadar,
  DocumentScoreLevelsCoverageRadar,
  DocumentScoreOverallRadar,
  DocumentScoreThreatsProtectionRadar,
  Icons,
  Select,
} from "@@components";
import * as consts from "@@consts";
import { RootState } from "@@store";
import * as thunks from "@@thunks";
import { DocumentMaterial, DocumentScoreTarget, DocumentStandardCompliance, DocumentType } from "@@types";
import {
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
} from "@@utils";
import * as styles from "./styles";

const Project: NextPage = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.project.title);
  const documentSpecs = useSelector((state: RootState) => state.project.documentSpecs);
  const documentScore = useSelector((state: RootState) => state.project.documentScore);

  useEffect(() => {
    dispatch(thunks.projectLoad());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div css={styles.root}>
        <div css={styles.sidebar}>
          <div css={styles.sidebarLogoContainer}>
            <Icons.App color={consts.COLOR_WHITE} />
          </div>
        </div>
        <div css={styles.main}>
          <div css={styles.mainTop}></div>
          <div css={styles.mainContent}>
            <div css={styles.mainContentHeader}>
              <div css={styles.contentTitle}>{title}</div>
            </div>
            <div css={styles.contentSectionTitle}>1 - General Info</div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Document Type</div>
              <CardSelect
                value={documentSpecs.type}
                items={[
                  {
                    value: DocumentType.PASSPORT,
                    icon: Icons.DocumentTypePassport,
                    label: formatDocumentTypeString(DocumentType.PASSPORT),
                  },
                  {
                    value: DocumentType.ID_CARD,
                    icon: Icons.DocumentTypeIdCard,
                    label: formatDocumentTypeString(DocumentType.ID_CARD),
                  },
                  {
                    value: DocumentType.DRIVING_LICENSE,
                    icon: Icons.DocumentTypeDriving,
                    label: formatDocumentTypeString(DocumentType.DRIVING_LICENSE),
                  },
                  {
                    value: DocumentType.OTHER,
                    icon: Icons.DocumentTypeOther,
                    label: formatDocumentTypeString(DocumentType.OTHER),
                  },
                ]}
                onChange={(value) => dispatch(thunks.projectChangeDocumentType(value as DocumentType))}
              />
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Material</div>
              <CardSelect
                value={documentSpecs.material}
                items={[
                  {
                    value: DocumentMaterial.PLASTIC,
                    icon: Icons.DocumentMaterialPlastic,
                    label: formatDocumentMaterialString(DocumentMaterial.PLASTIC),
                  },
                  {
                    value: DocumentMaterial.PAPER,
                    icon: Icons.DocumentMaterialPaper,
                    label: formatDocumentMaterialString(DocumentMaterial.PAPER),
                  },
                ]}
                onChange={(value) => dispatch(thunks.projectChangeDocumentMaterial(value as DocumentMaterial))}
              />
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Standard Compliance</div>
              <div css={styles.contentControlContainer}>
                <Select
                  items={[
                    DocumentStandardCompliance.ECOWAS_ID_CARD,
                    DocumentStandardCompliance.EU_ID_CARD,
                    DocumentStandardCompliance.EU_PASSPORT,
                    DocumentStandardCompliance.EU_RESIDENT_PERMIT,
                    DocumentStandardCompliance.ICAO,
                  ]}
                  itemId={(item) => item}
                  itemText={(item) => formatDocumentStandardComplianceString(item)}
                  itemSelected={(item) => item === documentSpecs.standardCompliance}
                  onItemSelect={(item) => {
                    dispatch(thunks.projectChangeDocumentStandardCompliance(item));
                  }}
                />
              </div>
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Score Target</div>
              <div css={styles.contentControlContainer}>
                <Select
                  items={[DocumentScoreTarget.THEORICAL_MAXIMUM, DocumentScoreTarget.SIA_RECO]}
                  itemId={(item) => item}
                  itemText={(item) => formatDocumentScoreTargetString(item)}
                  itemSelected={(item) => item === documentSpecs.scoreTarget}
                  onItemSelect={(item) => {
                    dispatch(thunks.projectChangeDocumentScoreTarget(item));
                  }}
                />
              </div>
            </div>
            <div css={styles.contentSectionTitle}>2 - Document Design</div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentText}>
                Document Design security refers to the physical features, techniques, and characteristics of documents
                including strengthening their security and improving their resistance to attack and misuse. With
                widespread access to low cost technologies including high quality scanning, color copying, image
                processing and photo quality printing, the capacity of individuals to produce convincing counterfeit
                travel documents and very deceptive alterations has increased significantly.
              </div>
            </div>
            <div css={styles.contentSectionTitle}>3 - Security Features</div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>IR</div>
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Offset Design</div>
            </div>
          </div>
        </div>
        <div css={styles.scores}>
          {documentScore && (
            <>
              <div css={styles.scoresTitleContainer}>
                <div css={styles.contentTitle}>Scores</div>
                <div css={styles.contentSubtitle}>Check out your scores in real time</div>
              </div>
              <div css={styles.scoresPanelGroup}>
                <div css={styles.scoresPanel}>
                  <div css={styles.scoresPanelTitle}>Overall score</div>
                  <div css={styles.overallScoreValue}>{documentScore.value}</div>
                </div>
                <div css={styles.scoresPanel}>
                  <div css={styles.icao}>
                    <div css={styles.icaoStatusBlock}>
                      ICAO: <span css={styles.icaoNotCompliant}>Not compliant</span>
                    </div>
                    <div css={styles.icaoMissingFeaturesBlock}>Missing Features</div>
                  </div>
                </div>
                <div css={[styles.scoresPanel, styles.scoresPanelSquare]}>
                  <div css={styles.scoresPanelTitle}>Overall Security</div>
                  <div css={styles.scorePanelSquareContentWrap}>
                    <div css={styles.scorePanelSquareContent}>
                      <DocumentScoreOverallRadar
                        value={documentScore.overall}
                        targetValue={documentScore.overallTarget}
                      />
                    </div>
                  </div>
                </div>
                <div css={[styles.scoresPanel, styles.scoresPanelSquare]}>
                  <div css={styles.scoresPanelTitle}>Distribution of features</div>
                  <div css={styles.scorePanelSquareContentWrap}>
                    <div css={styles.scorePanelSquareContent}>
                      <DocumentScoreDistributionRadar
                        value={documentScore.distribution}
                        targetValue={documentScore.distributionTarget}
                      />
                    </div>
                  </div>
                </div>
                <div css={[styles.scoresPanel, styles.scoresPanelSquare]}>
                  <div css={styles.scoresPanelTitle}>Protection against threats</div>
                  <div css={styles.scorePanelSquareContentWrap}>
                    <div css={styles.scorePanelSquareContent}>
                      <DocumentScoreThreatsProtectionRadar
                        value={documentScore.threatsProtection}
                        targetValue={documentScore.threatsProtectionTarget}
                      />
                    </div>
                  </div>
                </div>
                <div css={[styles.scoresPanel, styles.scoresPanelSquare]}>
                  <div css={styles.scoresPanelTitle}>Security level coverage</div>
                  <div css={styles.scorePanelSquareContentWrap}>
                    <div css={styles.scorePanelSquareContent}>
                      <DocumentScoreLevelsCoverageRadar
                        value={documentScore.levelsCoverage}
                        targetValue={documentScore.levelsCoverageTarget}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
  /*
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
*/
};

export default Project;
