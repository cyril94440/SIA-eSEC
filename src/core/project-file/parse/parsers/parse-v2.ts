import { Rpc } from "@@core/rpc/shared";
import { DocumentScoreTarget, DocumentStandardCompliance, ProjectSpecs, ProjectStatus } from "@@core/project";
import { V2 } from "../../types";
import { SFDocumentType } from "../../../rpc/shared/gen/esec_engine";

export function parseV2(content: V2.Content): ProjectSpecs {
  return {
    title: content.title,
    status: parseStatus(content.status),
    document: {
      type: parseDocumentType(content.document.type, content.document.material),
      scoreTarget: parseDocumentScoreTarget(content.document.scoreTarget),
      standardCompliance: parseDocumentStandardCompliance(content.document.standardCompliance),
      designAnswers: parseDocumentDesignAnswers(content.document.design.answers),
      securityFeatureIds: content.document.securityFeatures.ids,
    },
  };
}

function parseStatus(value: V2.Status): ProjectStatus {
  switch (value) {
    case "ongoing":
      return ProjectStatus.ONGOING;
  }
}

function parseDocumentType(value: V2.DocumentType, material: V2.DocumentMaterial): Rpc.SFDocumentType {
  if (value == "passport" && material == "paper") {
    return SFDocumentType.PassportPaper;
  }

  if (value == "passport" && material == "plastic") {
    return SFDocumentType.PassportPaper;
  }

  return SFDocumentType.Card;
}

function parseDocumentScoreTarget(value: V2.DocumentScoreTarget): DocumentScoreTarget {
  switch (value) {
    case "icao":
      return DocumentScoreTarget.ICAO;
    case "none":
      return DocumentScoreTarget.None;
  }
}

function parseDocumentStandardCompliance(value: V2.DocumentStandardCompliance): DocumentStandardCompliance {
  switch (value) {
    case "ecowas-id-card":
      return DocumentStandardCompliance.ECOWAS_ID_CARD;
    case "eu-id-card":
      return DocumentStandardCompliance.EU_ID_CARD;
    case "eu-passport":
      return DocumentStandardCompliance.EU_PASSPORT;
    case "eu-resident-permit":
      return DocumentStandardCompliance.EU_RESIDENT_PERMIT;
    case "icao":
      return DocumentStandardCompliance.ICAO;
  }
}

function parseDocumentDesignAnswers(value: V2.DocumentDesignAnswer[]): Rpc.DocumentDesignFormAnswer[] {
  return value.map((v) => ({
    idAnswer: v.answerId,
    idQuestion: v.questionId,
  }));
}