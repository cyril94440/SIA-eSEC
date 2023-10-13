import { DocumentStandardTarget, ProjectSpecs, ProjectStatus } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { Root, V4 } from "./types";
import { SFDocumentType } from "../rpc/shared/gen/esec_engine";

export function build(specs: ProjectSpecs): Root {
  return {
    version: 4,
    content: {
      title: specs.title,
      status: formatStatus(specs.status),
      document: {
        type: formatDocumentType(specs.document.type),
        standardTarget: formatDocumentStandardTarget(specs.document.standardTarget),
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

function formatStatus(value: ProjectStatus): V4.Status {
  switch (value) {
    case ProjectStatus.ONGOING:
      return "ongoing";
  }
}

function formatDocumentType(value: Rpc.SFDocumentType): V4.DocumentType {
  switch (value) {
    case SFDocumentType.Card:
      return "card";
    case SFDocumentType.PassportPaper:
      return "passport-paper";
    case SFDocumentType.PassportPlastic:
      return "passport-plastic";
  }
}

function formatDocumentStandardTarget(value: DocumentStandardTarget): V4.DocumentStandardTarget {
  switch (value) {
    case DocumentStandardTarget.ECOWAS_ID_CARD:
      return "ecowas-id-card";
    case DocumentStandardTarget.EU_ID_CARD:
      return "eu-id-card";
    case DocumentStandardTarget.EU_PASSPORT:
      return "eu-passport";
    case DocumentStandardTarget.EU_RESIDENT_PERMIT:
      return "eu-resident-permit";
    case DocumentStandardTarget.ICAO:
      return "icao";
    case DocumentStandardTarget.ICAO_DOC_9303:
      return "icao-doc-9303";
  }
}

function formatDocumentDesignAnswers(value: Rpc.DocumentDesignFormAnswer[]): V4.DocumentDesignAnswer[] {
  return value.map((v) => ({
    answerId: v.idAnswer,
    questionId: v.idQuestion,
  }));
}
