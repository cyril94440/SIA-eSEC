import { Rpc } from "@@core/rpc/shared";
import {
  DocumentScoreTarget,
  DocumentStandardCompliance,
  DocumentType,
  ProjectSpecs,
  ProjectStatus,
} from "@@core/project";
import { V1 } from "../../types";

export function parseV1(content: V1.Content): ProjectSpecs {
  return {
    title: content.title,
    status: parseStatus(content.status),
    document: {
      type: parseDocumentType(content.document.type),
      material: parseDocumentMaterial(content.document.material),
      scoreTarget: parseDocumentScoreTarget(content.document.scoreTarget),
      standardCompliance: parseDocumentStandardCompliance(content.document.standardCompliance),
      designAnswers: parseDocumentDesignAnswers(content.document.design.answers),
      securityFeatureIds: content.document.securityFeatures.ids,
    },
  };
}

function parseStatus(value: V1.Status): ProjectStatus {
  switch (value) {
    case "ongoing":
      return ProjectStatus.ONGOING;
  }
}

function parseDocumentType(value: V1.DocumentType): DocumentType {
  switch (value) {
    case "driving-license":
      return DocumentType.DRIVING_LICENSE;
    case "id-card":
      return DocumentType.ID_CARD;
    case "other":
      return DocumentType.OTHER;
    case "passport":
      return DocumentType.PASSPORT;
  }
}

function parseDocumentMaterial(value: V1.DocumentMaterial): Rpc.SFMaterial {
  switch (value) {
    case "paper":
      return Rpc.SFMaterial.Paper;
    case "plastic":
      return Rpc.SFMaterial.Plastic;
  }
}

function parseDocumentScoreTarget(value: V1.DocumentScoreTarget): DocumentScoreTarget {
  switch (value) {
    case "sia-reco":
      return DocumentScoreTarget.SIA_RECO;
    case "theorical-maximum":
      return DocumentScoreTarget.THEORICAL_MAXIMUM;
  }
}

function parseDocumentStandardCompliance(value: V1.DocumentStandardCompliance): DocumentStandardCompliance {
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

function parseDocumentDesignAnswers(value: V1.DocumentDesignAnswer[]): Rpc.DocumentDesignFormAnswer[] {
  return value.map((v) => ({
    idAnswer: v.answerId,
    idQuestion: v.questionId,
  }));
}
