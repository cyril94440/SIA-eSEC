export namespace ProjectFile {
  export type Root = {
    version: 1;
    content: V1.Content;
  };

  export namespace V1 {
    export type Status = "ongoing";
    export type DocumentType = "passport" | "id-card" | "driving-license" | "other";
    export type DocumentMaterial = "paper" | "plastic";
    export type DocumentScoreTarget = "sia-reco" | "theorical-maximum";

    export type DocumentStandardCompliance =
      | "ecowas-id-card"
      | "eu-id-card"
      | "eu-passport"
      | "eu-resident-permit"
      | "icao";

    export interface Content {
      title: string;
      status: Status;
      document: Document;
    }

    export interface Document {
      type: DocumentType;
      material: DocumentMaterial;
      scoreTarget: DocumentScoreTarget;
      standardCompliance: DocumentStandardCompliance;
      design: DocumentDesign;
      securityFeatures: DocumentSecurityFeatures;
    }

    export interface DocumentDesign {
      answers: DocumentDesignAnswer[];
    }

    export interface DocumentDesignAnswer {
      answerId: number;
      questionId: number;
    }

    export interface DocumentSecurityFeatures {
      ids: number[];
    }
  }
}
