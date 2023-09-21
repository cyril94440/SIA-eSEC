import { pdf } from "@react-pdf/renderer";
import { PdfDocument } from "../components/PdfDocument";
import { DocumentIcaoStatus, DocumentSecurityFeatureTree, ProjectSpecs } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";

export const generatePdfBlob = async (
  specs: ProjectSpecs,
  score: Rpc.TNScore | null,
  documentSecurityFeatures: Rpc.SecurityFeature[],
  documentSecurityFeatureTree: DocumentSecurityFeatureTree,
  designQuestions: Rpc.DocumentDesignQuestion[],
  icaoStatus: DocumentIcaoStatus
): Promise<Blob> => {
  return await pdf(
    <PdfDocument
      specs={specs}
      score={score}
      documentSecurityFeatures={documentSecurityFeatures}
      documentSecurityFeatureTree={documentSecurityFeatureTree}
      designQuestions={designQuestions}
      icaoStatus={icaoStatus}
    />
  ).toBlob();
};
