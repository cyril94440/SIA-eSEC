import { Rpc } from "@@core/rpc/shared";
import { DocumentStandardTarget, ProjectSpecs, ProjectStatus } from "@@core/project";
import { V4 } from "../../types";
import { SFDocumentType } from "../../../rpc/shared/gen/esec_engine";

export function parseV4(content: V4.Content): ProjectSpecs {
  return {
    title: content.title,
    status: parseStatus(content.status),
    document: {
      type: parseDocumentType(content.document.type),
      standardTarget: parseDocumentStandardTarget(content.document.standardTarget),
      designAnswers: parseDocumentDesignAnswers(content.document.design.answers),
      securityFeatureIds: content.document.securityFeatures.ids,
    },
  };
}

function parseStatus(value: V4.Status): ProjectStatus {
  switch (value) {
    case "ongoing":
      return ProjectStatus.ONGOING;
  }
}

function parseDocumentType(value: V4.DocumentType): Rpc.SFDocumentType {
  switch (value) {
    case "card":
      return SFDocumentType.Card;
    case "passport-paper":
      return SFDocumentType.PassportPaper;
    case "passport-plastic":
      return SFDocumentType.PassportPlastic;
  }
}

function parseDocumentStandardTarget(value: V4.DocumentStandardTarget): DocumentStandardTarget {
  switch (value) {
    case "ecowas-id-card":
      return DocumentStandardTarget.ECOWAS_ID_CARD;
    case "eu-id-card":
      return DocumentStandardTarget.EU_ID_CARD;
    case "eu-passport":
      return DocumentStandardTarget.EU_PASSPORT;
    case "eu-resident-permit":
      return DocumentStandardTarget.EU_RESIDENT_PERMIT;
    case "icao-doc-9303":
      return DocumentStandardTarget.ICAO_DOC_9303;
  }
}

function parseDocumentDesignAnswers(value: V4.DocumentDesignAnswer[]): Rpc.DocumentDesignFormAnswer[] {
  return value.map((v) => ({
    idAnswer: v.answerId,
    idQuestion: v.questionId,
  }));
}
