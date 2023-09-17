import { Rpc } from "@@core/rpc/shared";
import { DocumentType } from "./DocumentType";
import { DocumentStandardCompliance } from "./DocumentStandardCompliance";
import { DocumentScoreTarget } from "./DocumentScoreTarget";

export interface DocumentSpecs {
  type: DocumentType;
  material: Rpc.SFMaterial;
  standardCompliance: DocumentStandardCompliance;
  scoreTarget: DocumentScoreTarget;
  designAnswers: Rpc.DocumentDesignFormAnswer[];
  securityFeatureIds: number[];
}
