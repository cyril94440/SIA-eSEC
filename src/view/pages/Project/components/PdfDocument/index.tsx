import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import * as globalStyles from "@@view/styles";
import {
  DocumentIcaoStatus,
  DocumentSecurityFeatureTree,
  ProjectSpecs,
  formatDocumentScoreTargetString,
  formatDocumentSecurityFeatureCategoryString,
  formatDocumentSecurityFeatureLocationString,
  formatDocumentSecurityFeatureScoreCategoryString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  formatProjectStatusString,
} from "@@core/project";
import { FC, Fragment } from "react";
import { Rpc } from "@@core/rpc/shared";
import { allLocations, allScoreCategories } from "../Scores";

interface PdfDocumentProps {
  specs: ProjectSpecs;
  score: Rpc.TNScore | null;
  documentSecurityFeatures: Rpc.SecurityFeature[];
  documentSecurityFeatureTree: DocumentSecurityFeatureTree;
  designQuestions: Rpc.DocumentDesignQuestion[];
  icaoStatus: DocumentIcaoStatus;
}

export const PdfDocument: FC<PdfDocumentProps> = (props) => {
  let currentCategory: number | null = null;
  let currentLocation: number | null = null;

  const sortedFeatures = props.documentSecurityFeatures
    .filter((feature) => props.specs.document.securityFeatureIds.includes(feature.id))
    .sort((a, b) => {
      if (a.category === b.category) {
        return a.location - b.location;
      }
      return a.category - b.category;
    });

  const disitrubtionOfFeaturesItems = allLocations
    .map((l) => ({
      value: l.value,
      score: props.score!.securityFeaturesScore!.locationScore!.scorePerLoc[l.value] ?? null,
    }))
    .filter(({ score }) => score !== null);

  const protectionAgainstThreatsItems = allScoreCategories
    .map((c) => ({
      category: c.value,
      score: props.score!.securityFeaturesScore!.protectionScore!.categoryScores[c.value]?.score ?? null,
    }))
    .filter(({ score }) => score !== null);

  const securityLevelCoverage = allScoreCategories
    .map((c) => ({
      category: c.value,
      score: props.score!.securityFeaturesScore!.levelScore!.categoryScores[c.value]?.score ?? null,
    }))
    .filter(({ score }) => score !== null);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={[styles.noGap, styles.littleMarginBottom]}>
            <Text style={styles.title}>{props.specs.title}</Text>
            <Text style={styles.status}>Status: {formatProjectStatusString(props.specs.status)}</Text>
          </View>
          <View style={styles.noGap}>
            <Text style={styles.splitTitle}>Total score</Text>
            <CheckpointBar
              progression={
                props.score?.totalScore ? Math.round((props.score?.totalScore + Number.EPSILON) * 100) / 10 : 0
              }
            />
          </View>
          <Text style={styles.splitTitle}>
            ICAO:{" "}
            <Text style={props.icaoStatus.completed ? styles.success : styles.red}>
              {props.icaoStatus.completed ? "Complete" : "Not complete"}
            </Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>General Info</Text>
          <Text style={styles.inputRow}>
            Type: <Text style={styles.inlineData}>{formatDocumentTypeString(props.specs.document.type)}</Text>
          </Text>
          <Text style={styles.inputRow}>
            Standart compliance:{" "}
            <Text style={styles.inlineData}>
              {formatDocumentStandardComplianceString(props.specs.document.standardCompliance)}
            </Text>
          </Text>
          <Text style={styles.inputRow}>
            Score target:{" "}
            <Text style={styles.inlineData}>{formatDocumentScoreTargetString(props.specs.document.scoreTarget)}</Text>
          </Text>
        </View>
        {!props.icaoStatus.completed && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Missing basic ICAO features</Text>
            <View>
              {props.icaoStatus.basic.categories
                .filter((c) => !c.completed)
                .map((c) => {
                  return (
                    <View key={c.item.code} style={styles.noGap}>
                      <Text style={[styles.littleMarginBottom, styles.subtitle, styles.bigMarginTop]}>
                        {c.item.title}
                      </Text>
                      {c.subcategories
                        .filter((sc) => !sc.completed)
                        .map((sc) => {
                          return (
                            <Fragment key={sc.item.code}>
                              <Text style={[styles.marginY, styles.question]}>{sc.item.title}</Text>
                              {sc.features
                                .filter((f) => !f.completed)
                                .map((f) => {
                                  return (
                                    <Text key={f.item.code} style={[styles.littleMarginBottom, styles.securityAnswer]}>
                                      - {f.item.title}
                                    </Text>
                                  );
                                })}
                            </Fragment>
                          );
                        })}
                    </View>
                  );
                })}
            </View>
          </View>
        )}
        {props.specs.document.designAnswers.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Design questions</Text>
            <View style={styles.questionContainer}>
              {[...props.specs.document.designAnswers]
                .sort((a, b) => a.idQuestion - b.idQuestion)
                .map((answer) => {
                  const question = props.designQuestions.find((q) => q.id === answer.idQuestion);
                  const selectedAnswer = question?.answers.find((a) => a.id === answer.idAnswer);

                  return (
                    <View style={styles.noGap} key={answer.idQuestion} wrap={false}>
                      <Text style={styles.question}>
                        Q{answer.idQuestion + 1}: {question?.questionTitle}
                      </Text>
                      <Text style={styles.answer}>{selectedAnswer?.answerTitle}</Text>
                    </View>
                  );
                })}
            </View>
          </View>
        )}
        {props.specs.document.securityFeatureIds.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Security features</Text>
            <View>
              {sortedFeatures.map((feature) => {
                const isNewCategory = currentCategory !== feature.category;
                currentCategory = feature.category;
                const isNewLocation = currentLocation !== feature.location;
                currentLocation = feature.location;
                return (
                  <View style={styles.noGap} key={feature.id} wrap={false}>
                    {isNewCategory && (
                      <Text style={[styles.littleMarginBottom, styles.subtitle, styles.bigMarginTop]}>
                        {formatDocumentSecurityFeatureCategoryString(feature.category)}
                      </Text>
                    )}
                    {isNewLocation && (
                      <Text style={[styles.marginTop, styles.question]}>
                        {formatDocumentSecurityFeatureLocationString(feature.location)}
                      </Text>
                    )}
                    <Text style={[styles.littleMarginBottom, styles.securityAnswer]}>- {feature.title}</Text>
                  </View>
                );
              })}
            </View>
          </View>
        )}
        <View style={styles.section}>
          <Text style={styles.subtitle}>Graph - Overall Security</Text>
          <View style={styles.littleMarginBottom}>
            <Text style={styles.barTitle}>Location</Text>
            <CheckpointBar
              progression={
                props.score?.securityFeaturesScore?.locationScore?.score
                  ? props.score?.securityFeaturesScore?.locationScore?.score * 10
                  : 0
              }
            />
          </View>
          <View style={styles.littleMarginBottom}>
            <Text style={styles.barTitle}>Protection</Text>
            <CheckpointBar
              progression={
                props.score?.securityFeaturesScore?.protectionScore?.score
                  ? props.score?.securityFeaturesScore?.protectionScore?.score * 10
                  : 0
              }
            />
          </View>
          <View style={styles.littleMarginBottom}>
            <Text style={styles.barTitle}>Level</Text>
            <CheckpointBar
              progression={
                props.score?.securityFeaturesScore?.levelScore?.score
                  ? props.score?.securityFeaturesScore?.levelScore?.score * 10
                  : 0
              }
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Graph - Disitribution of features</Text>
          {disitrubtionOfFeaturesItems.map(({ value, score }) => {
            return (
              <View key={Math.random()} style={styles.littleMarginBottom} wrap={false}>
                <Text style={styles.barTitle}>{formatDocumentSecurityFeatureLocationString(value)}</Text>
                <CheckpointBar progression={score * 10} />
              </View>
            );
          })}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Graph - Protection against threats</Text>
          {protectionAgainstThreatsItems.map(({ category, score }) => {
            return (
              <View key={Math.random()} style={styles.littleMarginBottom} wrap={false}>
                <Text style={styles.barTitle}>{formatDocumentSecurityFeatureScoreCategoryString(category)}</Text>
                <CheckpointBar progression={score * 10} />
              </View>
            );
          })}
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Graph - Security level coverage</Text>
          {securityLevelCoverage.map(({ category, score }) => {
            return (
              <View key={Math.random()} style={styles.littleMarginBottom} wrap={false}>
                <Text style={styles.barTitle}>{formatDocumentSecurityFeatureScoreCategoryString(category)}</Text>
                <CheckpointBar progression={score * 10} />
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: globalStyles.COLOR_NEUTRAL_BLUE,
    padding: globalStyles.getSize(4),
  },
  section: {
    marginVertical: globalStyles.getSize(1),
    padding: globalStyles.getSize(2),
    gap: globalStyles.getSize(1),
    backgroundColor: globalStyles.COLOR_WHITE,
    borderRadius: globalStyles.getSize(1),
    boxShadow: `0px ${globalStyles.getSize(1 / 2)} ${globalStyles.getSize(3)} rgba(0, 0, 0, 0.04)`,
  },
  splitSection: {
    marginVertical: globalStyles.getSize(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: globalStyles.getSize(2),
  },
  splitTitle: {
    fontSize: globalStyles.FONT_MEDIUM_14_SIZE,
  },
  sectionChild: {
    maxWidth: "50%",
    flexGrow: 1,
    padding: globalStyles.getSize(2),
    backgroundColor: globalStyles.COLOR_WHITE,
    borderRadius: globalStyles.getSize(1),
    boxShadow: `0px ${globalStyles.getSize(1 / 2)} ${globalStyles.getSize(3)} rgba(0, 0, 0, 0.04)`,
  },
  title: {
    fontSize: globalStyles.FONT_MEDIUM_20_SIZE,
    marginBottom: globalStyles.getSize(1),
  },
  status: {
    fontSize: globalStyles.FONT_MEDIUM_10_CAPS_SIZE,
    color: globalStyles.COLOR_SUCCESS_40,
  },
  subtitle: {
    fontSize: globalStyles.FONT_MEDIUM_14_SIZE,
    marginBottom: globalStyles.getSize(1 / 2),
  },
  inlineData: {
    flexDirection: "row",
    color: globalStyles.COLOR_PRIMARY_20,
    fontWeight: "bold",
  },
  inputRow: {
    fontSize: globalStyles.FONT_MEDIUM_10_CAPS_SIZE,
  },
  success: {
    color: globalStyles.COLOR_SUCCESS_40,
  },
  red: {
    color: globalStyles.COLOR_RED,
  },
  questionContainer: {
    gap: globalStyles.getSize(2),
  },
  noGap: {
    gap: 0,
  },
  question: {
    fontSize: globalStyles.FONT_MEDIUM_10_CAPS_SIZE,
  },
  answer: {
    marginTop: globalStyles.getSize(1 / 2),
    fontSize: globalStyles.FONT_MEDIUM_10_CAPS_SIZE,
    color: globalStyles.COLOR_PRIMARY_20,
  },
  securityAnswer: {
    fontSize: globalStyles.FONT_MEDIUM_10_CAPS_SIZE,
    color: globalStyles.COLOR_PRIMARY_20,
    gap: 0,
    margin: 0,
  },
  bigMarginTop: {
    marginTop: globalStyles.getSize(2),
  },
  marginTop: {
    marginTop: globalStyles.getSize(1),
  },
  marginY: {
    marginTop: globalStyles.getSize(1),
    marginBottom: globalStyles.getSize(1),
  },
  littleMarginBottom: {
    marginBottom: globalStyles.getSize(1 / 2),
  },
  barTitle: {
    fontSize: globalStyles.FONT_MEDIUM_10_CAPS_SIZE,
    fontWeight: globalStyles.FONT_MEDIUM_10_CAPS_WEIGHT,
    lineHeight: globalStyles.FONT_MEDIUM_10_CAPS_LINE_HEIGHT,
  },
});

const CheckpointBar = ({ progression }: { progression: number }) => {
  const barHeight = 6; // Adjust as needed
  const barBackground = globalStyles.COLOR_NEUTRAL_95;

  const redWidth = Math.min(progression, 34);
  const yellowWidth = Math.max(0, Math.min(progression - 32, 32));
  const greenWidth = Math.max(0, progression - 66);

  const containerStyle = {
    height: `${barHeight}px`,
    backgroundColor: barBackground,
    marginTop: globalStyles.getSize(1),
    marginBottom: globalStyles.getSize(1),
    maxWidth: "200px",
  };

  const progressBarSegmentStyle = (color: string, width: number) => ({
    backgroundColor: color,
    height: `${barHeight}px`,
    width: `${width}%`,
  });

  return (
    <View style={{ display: "flex", flexDirection: "row", ...containerStyle }}>
      <View style={progressBarSegmentStyle(globalStyles.COLOR_RED, redWidth)}></View>
      <View style={progressBarSegmentStyle(globalStyles.COLOR_YELLOW, yellowWidth)}></View>
      <View style={progressBarSegmentStyle(globalStyles.COLOR_SUCCESS_40, greenWidth)}></View>
    </View>
  );
};
