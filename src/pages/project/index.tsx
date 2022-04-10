import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonKind,
  CardSelect,
  DocumentScoreDistributionRadar,
  DocumentScoreLevelsCoverageRadar,
  DocumentScoreOverallRadar,
  DocumentScoreThreatsProtectionRadar,
  Icons,
  MultiSelect,
  Progress,
  RadioGroup,
  Select,
} from "@@components";
import * as consts from "@@consts";
import { RootState } from "@@store";
import * as thunks from "@@thunks";
import {
  DocumentMaterial,
  DocumentScoreTarget,
  DocumentSecurityFeature,
  DocumentStandardCompliance,
  DocumentType,
} from "@@types";
import {
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentSecurityFeatureString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  formatPageTitle,
  formatProjectStatusString,
} from "@@utils";
import * as styles from "./styles";

const Project: NextPage = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.project.title);
  const status = useSelector((state: RootState) => state.project.status);
  const documentSpecs = useSelector((state: RootState) => state.project.documentSpecs);
  const documentScore = useSelector((state: RootState) => state.project.documentScore);

  useEffect(() => {
    dispatch(thunks.projectLoad());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{formatPageTitle(title)}</title>
      </Head>
      <div css={styles.root}>
        <div css={styles.sidebar}>
          <div css={styles.sidebarLogoContainer}>
            <Icons.App color={consts.COLOR_WHITE} />
          </div>
        </div>
        <div css={styles.main}>
          <div css={styles.mainTop}>
            <div css={styles.status}>
              <span css={styles.statusLabel}>{"Status: "}</span>
              <span css={styles.statusValue}>{formatProjectStatusString(status)}</span>
            </div>
          </div>
          <div css={styles.mainContent}>
            <div css={styles.mainContentHeader}>
              <div css={styles.mainContentTitle}>
                <div css={styles.mainContentTitleBody}>{title}</div>
                <div
                  css={styles.mainContentTitleEditIcon}
                  onClick={() => {
                    dispatch(thunks.projectRename());
                  }}
                >
                  <Icons.Edit color="currentColor" />
                </div>
              </div>
              <div css={styles.encryptionInfo}>
                <div css={styles.encryptionInfoIcon}>
                  <Icons.Lock color="currentColor" />
                </div>
                <div css={styles.encryptionInfoText}>
                  The data are end-to-end encrypted, you and your collaborators are the only ones who can access the
                  data.
                </div>
                <Button
                  title="More info"
                  kind={ButtonKind.Secondary}
                  onClick={() => {
                    dispatch(thunks.projectViewEncryptionInfo());
                  }}
                />
              </div>
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
                  value={documentSpecs.standardCompliance}
                  items={[
                    DocumentStandardCompliance.ECOWAS_ID_CARD,
                    DocumentStandardCompliance.EU_ID_CARD,
                    DocumentStandardCompliance.EU_PASSPORT,
                    DocumentStandardCompliance.EU_RESIDENT_PERMIT,
                    DocumentStandardCompliance.ICAO,
                  ]}
                  itemId={(item) => item}
                  itemText={(item) => formatDocumentStandardComplianceString(item)}
                  onChange={(item) => {
                    dispatch(thunks.projectChangeDocumentStandardCompliance(item));
                  }}
                />
              </div>
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Score Target</div>
              <div css={styles.contentControlContainer}>
                <Select
                  value={documentSpecs.scoreTarget}
                  items={[DocumentScoreTarget.THEORICAL_MAXIMUM, DocumentScoreTarget.SIA_RECO]}
                  itemId={(item) => item}
                  itemText={(item) => formatDocumentScoreTargetString(item)}
                  onChange={(item) => {
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
            <div css={styles.contentSectionItem}>
              <div css={styles.contentControlContainer}>
                <div css={styles.contentControlLabel}>
                  1 - Is the security design based on a risk analysis and is it documented ?
                </div>
                <RadioGroup
                  value={documentSpecs.designAnswer1}
                  items={[
                    {
                      value: true,
                      content: "Yes - all aspects blablablablablablablablablablablablablab",
                    },
                    {
                      value: false,
                      content: "No - all aspects blablablablablablablablablablablablablablablablablabla",
                      activeBackgroundColor: consts.COLOR_CRITICAL_50,
                    },
                  ]}
                  onChange={(value) => {
                    dispatch(thunks.projectChangeDocumentDesignAnswer1(value));
                  }}
                />
              </div>
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentControlContainer}>
                <div css={styles.contentControlLabel}>
                  2 - Is the security design based on a risk analysis and is it documented ?
                </div>
                <RadioGroup
                  value={documentSpecs.designAnswer2}
                  items={[
                    {
                      value: true,
                      content: "Yes - all aspects blablablablablablablablablablablablablab",
                    },
                    {
                      value: false,
                      content: "No - all aspects blablablablablablablablablablablablablablablablablabla",
                      activeBackgroundColor: consts.COLOR_CRITICAL_50,
                    },
                  ]}
                  onChange={(value) => {
                    dispatch(thunks.projectChangeDocumentDesignAnswer2(value));
                  }}
                />
              </div>
            </div>
            <div css={styles.contentSectionTitle}>3 - Security Features</div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>IR</div>
              <div css={styles.contentControlContainer}>
                <MultiSelect
                  title="Select your feature"
                  value={documentSpecs.securityFeatures}
                  items={[
                    DocumentSecurityFeature.IR_A,
                    DocumentSecurityFeature.IR_B,
                    DocumentSecurityFeature.IR_C,
                    DocumentSecurityFeature.IR_D,
                    DocumentSecurityFeature.IR_E,
                    DocumentSecurityFeature.IR_F,
                  ]}
                  itemId={(item) => item}
                  itemContent={(item) => formatDocumentSecurityFeatureString(item)}
                  onChange={(value) => {
                    dispatch(thunks.projectChangeDocumentSecurityFeatures(value));
                  }}
                />
              </div>
            </div>
            <div css={styles.contentSectionItem}>
              <div css={styles.contentSectionItemTitle}>Offset Design</div>
              <div css={styles.contentControlContainer}>
                <MultiSelect
                  title="Select your feature"
                  value={documentSpecs.securityFeatures}
                  items={[
                    DocumentSecurityFeature.OFFSET_DESIGN_A,
                    DocumentSecurityFeature.OFFSET_DESIGN_B,
                    DocumentSecurityFeature.OFFSET_DESIGN_C,
                    DocumentSecurityFeature.OFFSET_DESIGN_D,
                    DocumentSecurityFeature.OFFSET_DESIGN_E,
                    DocumentSecurityFeature.OFFSET_DESIGN_F,
                    DocumentSecurityFeature.OFFSET_DESIGN_G,
                    DocumentSecurityFeature.OFFSET_DESIGN_H,
                  ]}
                  itemId={(item) => item}
                  itemContent={(item) => formatDocumentSecurityFeatureString(item)}
                  onChange={(value) => {
                    dispatch(thunks.projectChangeDocumentSecurityFeatures(value));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div css={styles.scores}>
          {documentScore && (
            <>
              <div css={styles.scoresHeader}>
                <div css={styles.scoresTitle}>Scores</div>
                <div css={styles.scoresSubtitle}>Check out your scores in real time</div>
              </div>
              <div css={styles.scoresPanelGroup}>
                <div css={styles.scoresPanel}>
                  <div css={styles.scoresPanelTitle}>Overall score</div>
                  <div css={styles.overallScoreValue}>{documentScore.value}</div>
                  <Progress percent={documentScore.value} />
                </div>
                <div css={styles.scoresPanel}>
                  <div css={styles.icao}>
                    <div css={styles.icaoStatusBlock}>
                      ICAO: <span css={styles.icaoNotCompliant}>Not compliant</span>
                    </div>
                    <div
                      css={styles.icaoMissingFeaturesBlock}
                      onClick={() => {
                        dispatch(thunks.projectViewMissingFeatures());
                      }}
                    >
                      Missing Features
                    </div>
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
                <div css={styles.downloadReportContainer}>
                  <Button
                    title="Download report"
                    fullWidth={true}
                    onClick={() => {
                      dispatch(thunks.projectDownloadReport());
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Project;
