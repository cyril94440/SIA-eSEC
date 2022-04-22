import { FC } from "react";
import * as rpc from "@@rpc/shared";
import { DocumentScoreTarget, DocumentSpecs, DocumentStandardCompliance, DocumentType, ProjectStatus } from "@@core";
import { DocumentDesign, GeneralInfo, Header, SecurityFeatures, Status } from "./components";
import * as styles from "./styles";

export interface ContentProps {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  documentDesignQuestionsInfo: rpc.DocumentDesignQuestion[];
  documentSecurityFeaturesInfo: rpc.SecurityFeature[];
  onRenameClick: () => void;
  onEncryptionInfoClick: () => void;
  onChangeDocumentType: (value: DocumentType) => void;
  onChangeDocumentMaterial: (value: rpc.SFMaterial) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
  onChangeDocumentDesignAnswer: (value: rpc.DocumentDesignFormAnswer) => void;
  onChangeDocumentSecurityFeatures: (value: number[]) => void;
}

export const Content: FC<ContentProps> = (props) => {
  return (
    <div css={styles.root}>
      <Status value={props.status} />
      <Header
        title={props.title}
        onRenameClick={props.onRenameClick}
        onEncryptionInfoClick={props.onEncryptionInfoClick}
      />
      <GeneralInfo
        documentSpecs={props.documentSpecs}
        onChangeDocumentType={props.onChangeDocumentType}
        onChangeDocumentMaterial={props.onChangeDocumentMaterial}
        onChangeDocumentStandardCompliance={props.onChangeDocumentStandardCompliance}
        onChangeDocumentScoreTarget={props.onChangeDocumentScoreTarget}
      />
      <DocumentDesign
        documentSpecs={props.documentSpecs}
        documentDesignQuestionsInfo={props.documentDesignQuestionsInfo}
        onChangeDocumentDesignAnswer={props.onChangeDocumentDesignAnswer}
      />
      <SecurityFeatures
        documentSpecs={props.documentSpecs}
        documentSecurityFeaturesInfo={props.documentSecurityFeaturesInfo}
        onChangeDocumentSecurityFeatures={props.onChangeDocumentSecurityFeatures}
      />
    </div>
  );
};
