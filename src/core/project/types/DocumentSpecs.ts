import { Rpc } from "@@core/rpc/shared";
import { DocumentStandardCompliance } from "./DocumentStandardCompliance";
import { DocumentScoreTarget } from "./DocumentScoreTarget";

export interface DocumentSpecs {
  type: Rpc.SFDocumentType;
  standardCompliance: DocumentStandardCompliance;
  scoreTarget: DocumentScoreTarget;
  designAnswers: Rpc.DocumentDesignFormAnswer[];
  securityFeatureIds: number[];
}
