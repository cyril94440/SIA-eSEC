import { Rpc } from "@@core/rpc/shared";
import {
  DocumentScoreTarget,
  DocumentStandardCompliance,
  DocumentType,
  ProjectSpecs,
  ProjectStatus,
} from "@@core/project";
import { Root, V2 } from "./types";

export function build(specs: ProjectSpecs): Root {
  return {
    version: 2,
    content: {
      title: specs.title,
      status: formatStatus(specs.status),
      document: {
        type: formatDocumentType(specs.document.type),
        material: formatDocumentMaterial(specs.document.material),
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

function formatStatus(value: ProjectStatus): V2.Status {
  switch (value) {
    case ProjectStatus.ONGOING:
      return "ongoing";
  }
}

function formatDocumentType(value: DocumentType): V2.DocumentType {
  switch (value) {
    case DocumentType.DRIVING_LICENSE:
      return "driving-license";
    case DocumentType.ID_CARD:
      return "id-card";
    case DocumentType.OTHER:
      return "other";
    case DocumentType.PASSPORT:
      return "passport";
  }
}

function formatDocumentMaterial(value: Rpc.SFMaterial): V2.DocumentMaterial {
  switch (value) {
    case Rpc.SFMaterial.Paper:
      return "paper";
    case Rpc.SFMaterial.Plastic:
      return "plastic";
  }
}

function formatDocumentScoreTarget(value: DocumentScoreTarget): V2.DocumentScoreTarget {
  switch (value) {
    case DocumentScoreTarget.ICAO:
      return "icao";
    case DocumentScoreTarget.None:
      return "none";
  }
}

function formatDocumentStandardCompliance(value: DocumentStandardCompliance): V2.DocumentStandardCompliance {
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

function formatDocumentDesignAnswers(value: Rpc.DocumentDesignFormAnswer[]): V2.DocumentDesignAnswer[] {
  return value.map((v) => ({
    answerId: v.idAnswer,
    questionId: v.idQuestion,
  }));
}
