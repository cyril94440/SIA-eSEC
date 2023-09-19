import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "../components/PdfDocument";
import { DocumentSpecs, ProjectStatus } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { DocumentSecurityFeatureTree } from "../components/Content/utils";
export const generatePdfBlob = async (
  title: string,
  status: ProjectStatus,
  score: Rpc.TNScore | null,
  documentSpecs: DocumentSpecs,
  designQuestions: Rpc.DocumentDesignQuestion[],
  securityFeatures: Rpc.SecurityFeature[],
  documentSecurityFeaturesTree: DocumentSecurityFeatureTree
): Promise<Blob> => {
  return await pdf(
    <PdfDocument
      title={title}
      status={status}
      score={score}
      documentSpecs={documentSpecs}
      designQuestions={designQuestions}
      securityFeatures={securityFeatures}
      documentSecurityFeaturesTree={documentSecurityFeaturesTree}
    />
  ).toBlob();
};
