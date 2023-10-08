import { DocumentScoreTarget, DocumentStandardCompliance, ProjectSpecs, ProjectStatus } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { Root, V3 } from "./types";
import { SFDocumentType } from "../rpc/shared/gen/esec_engine";

export function build(specs: ProjectSpecs): Root {
  return {
    version: 3,
    content: {
      title: specs.title,
      status: formatStatus(specs.status),
      document: {
        type: formatDocumentType(specs.document.type),
        scoreTarget: formatDocumentScoreTarget(specs.document.scoreTarget),
        standardCompliance: formatDocumentStandardCompliance(specs.document.standardCompliance),
        design: {
          answers: formatDocumentDesignAnswers(specs.document.designAnswers),
        },
        securityFeatures: {
          ids: specs.document.securityFeatureIds,
        },
      },
    },
  };
}

function formatStatus(value: ProjectStatus): V3.Status {
  switch (value) {
    case ProjectStatus.ONGOING:
      return "ongoing";
  }
}

function formatDocumentType(value: Rpc.SFDocumentType): V3.DocumentType {
  switch (value) {
    case SFDocumentType.Card:
      return "card";
    case SFDocumentType.PassportPaper:
      return "passport-paper";
    case SFDocumentType.PassportPlastic:
      return "passport-plastic";
  }
}

function formatDocumentScoreTarget(value: DocumentScoreTarget): V3.DocumentScoreTarget {
  switch (value) {
    case DocumentScoreTarget.ICAO:
      return "icao";
    case DocumentScoreTarget.None:
      return "none";
  }
}

function formatDocumentStandardCompliance(value: DocumentStandardCompliance): V3.DocumentStandardCompliance {
  switch (value) {
    case DocumentStandardCompliance.ECOWAS_ID_CARD:
      return "ecowas-id-card";
    case DocumentStandardCompliance.EU_ID_CARD:
      return "eu-id-card";
    case DocumentStandardCompliance.EU_PASSPORT:
      return "eu-passport";
    case DocumentStandardCompliance.EU_RESIDENT_PERMIT:
      return "eu-resident-permit";
    case DocumentStandardCompliance.ICAO:
      return "icao";
  }
}

function formatDocumentDesignAnswers(value: Rpc.DocumentDesignFormAnswer[]): V3.DocumentDesignAnswer[] {
  return value.map((v) => ({
    answerId: v.idAnswer,
    questionId: v.idQuestion,
  }));
}
