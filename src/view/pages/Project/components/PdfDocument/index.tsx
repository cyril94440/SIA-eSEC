import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import * as globalStyles from "@@view/styles";
import {
  DocumentSpecs,
  ProjectStatus,
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentSecurityFeatureCategoryString,
  formatDocumentSecurityFeatureLocationString,
  formatDocumentSecurityFeatureScoreCategoryString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  formatProjectStatusString,
} from "@@core/project";
import { FC } from "react";
import { Rpc } from "@@core/rpc/shared";
import { DocumentSecurityFeatureTree } from "../Content/utils";
import { allLocations, allScoreCategories } from "../Scores";

interface PdfDocumentProps {
  title: string;
  status: ProjectStatus;
  score: Rpc.TNScore | null;
  documentSpecs: DocumentSpecs;
  designQuestions: Rpc.DocumentDesignQuestion[];
  securityFeatures: Rpc.SecurityFeature[];
  documentSecurityFeaturesTree: DocumentSecurityFeatureTree;
  icaoData: {
    icaoSecurityFeatures: Rpc.IcaoSecurityFeature[];
    icaoSecurityFeatureCategories: Rpc.IcaoSecurityFeatureCategory[];
    icaoSecurityFeatureSubcategories: Rpc.IcaoSecurityFeatureSubcategory[];
  };
}

export const PdfDocument: FC<PdfDocumentProps> = (props) => {
  let currentCategory: number | null = null;
  let currentLocation: number | null = null;
  let currentIcaoCategory: string | null = null;

  const sortedFeatures = props.securityFeatures
    .filter((feature) => props.documentSpecs.securityFeatureIds.includes(feature.id))
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

  const icaoMissingFeatures = filterMissingFeatures(props.documentSpecs, props.icaoData, props.securityFeatures);

  console.log("icaoMissingFeatures", JSON.stringify(icaoMissingFeatures));
  console.log("securityFeatures", JSON.stringify(props.securityFeatures));
  console.log("securityFeatureIds", props.documentSpecs.securityFeatureIds);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={[styles.noGap, styles.littleMarginBottom]}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.status}>Status: {formatProjectStatusString(props.status)}</Text>
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
            {icaoMissingFeatures.length > 0 ? (
              <Text style={styles.red}>Not complete</Text>
            ) : (
              <Text style={styles.success}>Complete</Text>
            )}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>General Info</Text>
          <Text style={styles.inputRow}>
            Type: <Text style={styles.inlineData}>{formatDocumentTypeString(props.documentSpecs.type)}</Text>
          </Text>
          <Text style={styles.inputRow}>
            Material:{" "}
            <Text style={styles.inlineData}>{formatDocumentMaterialString(props.documentSpecs.material)}</Text>
          </Text>
          <Text style={styles.inputRow}>
            Standart compliance:{" "}
            <Text style={styles.inlineData}>
              {formatDocumentStandardComplianceString(props.documentSpecs.standardCompliance)}
            </Text>
          </Text>
          <Text style={styles.inputRow}>
            Score target:{" "}
            <Text style={styles.inlineData}>{formatDocumentScoreTargetString(props.documentSpecs.scoreTarget)}</Text>
          </Text>
        </View>
        {icaoMissingFeatures.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Missing ICAO features</Text>
            <View>
              {icaoMissingFeatures.map((feature) => {
                const isNewCategory = currentIcaoCategory !== feature.category;
                currentIcaoCategory = feature.category;
                return (
                  <View key={Math.random()} style={styles.noGap}>
                    {isNewCategory && (
                      <Text style={[styles.littleMarginBottom, styles.subtitle, styles.bigMarginTop]}>
                        {feature.category}
                      </Text>
                    )}
                    <Text style={[styles.marginTop, styles.question]}>{feature.subcategory}</Text>
                    {feature.missingFeatures.map((missingFeature) => (
                      <Text key={missingFeature.code} style={[styles.littleMarginBottom, styles.securityAnswer]}>
                        - {missingFeature.title}
                      </Text>
                    ))}
                  </View>
                );
              })}
            </View>
          </View>
        )}
        {props.documentSpecs.designAnswers.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Design questions</Text>
            <View style={styles.questionContainer}>
              {[...props.documentSpecs.designAnswers]
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
        {props.documentSpecs.securityFeatureIds.length > 0 && (
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

type FilteredResult = {
  category: string;
  subcategory: string;
  missingFeatures: Rpc.IcaoSecurityFeature[];
}[];

const filterMissingFeatures = (
  specs: DocumentSpecs,
  icaoData: {
    icaoSecurityFeatures: Rpc.IcaoSecurityFeature[];
    icaoSecurityFeatureCategories: Rpc.IcaoSecurityFeatureCategory[];
    icaoSecurityFeatureSubcategories: Rpc.IcaoSecurityFeatureSubcategory[];
  },
  securityFeatures: Rpc.SecurityFeature[]
): FilteredResult => {
  const filteredResults: FilteredResult = [];
  const allSecurityFeatures = new Map(securityFeatures.map((f) => [f.id, f]));

  icaoData.icaoSecurityFeatureCategories.forEach((category) => {
    const relatedSubcategories = icaoData.icaoSecurityFeatureSubcategories.filter(
      (sub) => sub.categoryCode === category.code
    );

    relatedSubcategories.forEach((subcat) => {
      const candidateFeatures = icaoData.icaoSecurityFeatures.filter(
        (feature) => feature.subcategoryCode === subcat.code
      );

      const missingFeatures = candidateFeatures.filter((feature) => {
        const actualRelatedIds = feature.relatedEsecSecurityFeatureIds.filter((id) => {
          const f = allSecurityFeatures.get(id);
          return !!f && f.materialsCompatible.includes(specs.material);
        });

        if (actualRelatedIds.length === 0) {
          return false;
        }

        return actualRelatedIds.every((id) => !specs.securityFeatureIds.includes(id));
      });

      if (missingFeatures.length > 0) {
        filteredResults.push({
          category: category.title,
          subcategory: subcat.title,
          missingFeatures,
        });
      }
    });
  });

  return filteredResults;
};
