import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import * as globalStyles from "@@view/styles";
import {
  DocumentSpecs,
  ProjectStatus,
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  formatProjectStatusString,
} from "@@core/project";
import { FC } from "react";
import { Rpc } from "@@core/rpc/shared";
import { DocumentSecurityFeatureTree } from "../Content/utils";

interface PdfDocumentProps {
  title: string;
  status: ProjectStatus;
  score: Rpc.TNScore | null;
  documentSpecs: DocumentSpecs;
  designQuestions: Rpc.DocumentDesignQuestion[];
  securityFeatures: Rpc.SecurityFeature[];
  documentSecurityFeaturesTree: DocumentSecurityFeatureTree;
}

export const PdfDocument: FC<PdfDocumentProps> = (props) => {
  console.log("security features id:", props.documentSpecs.securityFeatureIds);
  console.log("all security features: ", props.securityFeatures);

  props.documentSecurityFeaturesTree.categoryNodes.map((node) => {
    console.log("node", node);
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.status}>Status: {formatProjectStatusString(props.status)}</Text>
        </View>
        <View style={styles.splitSection}>
          <View style={styles.sectionChild}>
            <Text style={styles.splitTitle}>
              Score:{" "}
              <Text style={styles.inlineScore}>
                {props.score?.totalScore ? Math.round((props.score?.totalScore + Number.EPSILON) * 100) / 10 : 0} %
              </Text>
            </Text>
          </View>
          <View style={styles.sectionChild}>
            <Text style={styles.splitTitle}>
              ICAO: <Text style={styles.inlineIcao}>Not complete</Text>
            </Text>
          </View>
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
        {props.documentSpecs.designAnswers.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subtitle}>Design questions</Text>
            <View style={styles.questionContainer}>
              {props.documentSpecs.designAnswers.map((answer) => {
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
            <View style={styles.questionContainer}>
              {props.securityFeatures
                .filter((feature) => props.documentSpecs.securityFeatureIds.includes(feature.id))
                .map((feature) => {
                  return (
                    <View style={styles.noGap} key={feature.id} wrap={false}>
                      {1 + 1 === 3 && (
                        <Text style={styles.question}>TODO: retrieve the title of the security question</Text>
                      )}
                      <Text style={styles.answer}>{feature.title}</Text>
                    </View>
                  );
                })}
            </View>
          </View>
        )}
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
  inlineScore: {
    color: globalStyles.COLOR_SUCCESS_40,
  },
  inlineIcao: {
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
});
