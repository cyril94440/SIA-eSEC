import { DocumentDesignAnswer } from "./DocumentDesignAnswer";
import { DocumentType } from "./DocumentType";
import { DocumentMaterial } from "./DocumentMaterial";
import { DocumentStandardCompliance } from "./DocumentStandardCompliance";
import { DocumentScoreTarget } from "./DocumentScoreTarget";
import { DocumentSecurityFeature } from "./DocumentSecurityFeature";

export interface DocumentSpecs {
  type: DocumentType;
  material: DocumentMaterial;
  standardCompliance: DocumentStandardCompliance;
  scoreTarget: DocumentScoreTarget;
  designAnswers: DocumentDesignAnswer[];
  securityFeatures: DocumentSecurityFeature[];
}
