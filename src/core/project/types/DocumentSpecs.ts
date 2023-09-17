import { SFMaterial, DocumentDesignFormAnswer } from "../../rpc/shared";
import { DocumentType } from "./DocumentType";
import { DocumentStandardCompliance } from "./DocumentStandardCompliance";
import { DocumentScoreTarget } from "./DocumentScoreTarget";

export interface DocumentSpecs {
  type: DocumentType;
  material: SFMaterial;
  standardCompliance: DocumentStandardCompliance;
  scoreTarget: DocumentScoreTarget;
  designAnswers: DocumentDesignFormAnswer[];
  securityFeatureIds: number[];
}
