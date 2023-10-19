import { Rpc } from "@@core/rpc/shared";
import { DocumentStandardTarget, ProjectSpecs, ProjectStatus } from "@@core/project";
import { V2 } from "../../types";
import { SFDocumentType } from "../../../rpc/shared/gen/esec_engine";

export function parseV2(content: V2.Content): ProjectSpecs {
  return {
    title: content.title,
    status: parseStatus(content.status),
    document: {
      type: parseDocumentType(content.document.type, content.document.material),
      standardTarget: parseDocumentStandardTarget(content.document.standardCompliance),
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

function parseDocumentStandardTarget(value: V2.DocumentStandardCompliance): DocumentStandardTarget {
  switch (value) {
    case "ecowas-id-card":
      return DocumentStandardTarget.ECOWAS_ID_CARD;
    case "eu-id-card":
      return DocumentStandardTarget.EU_ID_CARD;
    case "eu-passport":
      return DocumentStandardTarget.EU_PASSPORT;
    case "eu-resident-permit":
      return DocumentStandardTarget.EU_RESIDENT_PERMIT;
  }
}

function parseDocumentDesignAnswers(value: V2.DocumentDesignAnswer[]): Rpc.DocumentDesignFormAnswer[] {
  return value.map((v) => ({
    idAnswer: v.answerId,
    idQuestion: v.questionId,
  }));
}
