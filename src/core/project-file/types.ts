export type Root =
  | {
      version: 1;
      content: V1.Content;
    }
  | {
      version: 2;
      content: V2.Content;
    }
  | {
      version: 3;
      content: V3.Content;
    }
  | {
      version: 4;
      content: V4.Content;
    };

export namespace V1 {
  export type Status = "ongoing";
  export type DocumentType = "passport" | "id-card" | "driving-license" | "other";
  export type DocumentMaterial = "paper" | "plastic";
  export type DocumentScoreTarget = "sia-reco" | "theorical-maximum";

  export type DocumentStandardCompliance = "ecowas-id-card" | "eu-id-card" | "eu-passport" | "eu-resident-permit";

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

export namespace V2 {
  export type Status = "ongoing";
  export type DocumentType = "passport" | "id-card" | "driving-license" | "other";
  export type DocumentMaterial = "paper" | "plastic";
  export type DocumentScoreTarget = "icao" | "none";

  export type DocumentStandardCompliance = "ecowas-id-card" | "eu-id-card" | "eu-passport" | "eu-resident-permit";

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

export namespace V3 {
  export type Status = "ongoing";
  export type DocumentType = "card" | "passport-paper" | "passport-plastic";
  export type DocumentScoreTarget = "icao" | "none";

  export type DocumentStandardCompliance = "ecowas-id-card" | "eu-id-card" | "eu-passport" | "eu-resident-permit";

  export interface Content {
    title: string;
    status: Status;
    document: Document;
  }

  export interface Document {
    type: DocumentType;
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

export namespace V4 {
  export type Status = "ongoing";
  export type DocumentType = "card" | "passport-paper" | "passport-plastic";

  export type DocumentStandardTarget =
    | "ecowas-id-card"
    | "eu-id-card"
    | "eu-passport"
    | "eu-resident-permit"
    | "icao-doc-9303";

  export interface Content {
    title: string;
    status: Status;
    document: Document;
  }

  export interface Document {
    type: DocumentType;
    standardTarget: DocumentStandardTarget;
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
