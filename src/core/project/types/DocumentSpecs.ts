import { Rpc } from "@@core/rpc/shared";
import { DocumentStandardTarget } from "./DocumentStandardTarget";

export interface DocumentSpecs {
  type: Rpc.SFDocumentType;
  standardTarget: DocumentStandardTarget;
  designAnswers: Rpc.DocumentDesignFormAnswer[];
  securityFeatureIds: number[];
}
