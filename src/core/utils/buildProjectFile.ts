import { DocumentDesignFormAnswer, SFMaterial } from "@@rpc/shared";
import {
  DocumentScoreTarget,
  DocumentStandardCompliance,
  DocumentType,
  ProjectFile,
  ProjectSpecs,
  ProjectStatus,
} from "../types";

export function buildProjectFile(specs: ProjectSpecs): ProjectFile.Root {
  return {
    version: "1",
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

function formatStatus(value: ProjectStatus): ProjectFile.V1.Status {
  switch (value) {
    case ProjectStatus.ONGOING:
      return "ongoing";
  }
}

function formatDocumentType(value: DocumentType): ProjectFile.V1.DocumentType {
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

function formatDocumentMaterial(value: SFMaterial): ProjectFile.V1.DocumentMaterial {
  switch (value) {
    case SFMaterial.Paper:
      return "paper";
    case SFMaterial.Plastic:
      return "plastic";
  }
}

function formatDocumentScoreTarget(value: DocumentScoreTarget): ProjectFile.V1.DocumentScoreTarget {
  switch (value) {
    case DocumentScoreTarget.SIA_RECO:
      return "sia-reco";
    case DocumentScoreTarget.THEORICAL_MAXIMUM:
      return "theorical-maximum";
  }
}

function formatDocumentStandardCompliance(
  value: DocumentStandardCompliance
): ProjectFile.V1.DocumentStandardCompliance {
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

function formatDocumentDesignAnswers(value: DocumentDesignFormAnswer[]): ProjectFile.V1.DocumentDesignAnswer[] {
  return value.map((v) => ({
    answerId: v.idAnswer,
    questionId: v.idQuestion,
  }));
}
