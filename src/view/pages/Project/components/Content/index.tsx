import { FC } from "react";
import * as api from "@@api/common";
import {
  DocumentDesignAnswer,
  DocumentMaterial,
  DocumentScoreTarget,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType,
  ProjectStatus,
} from "@@core";
import { DocumentDesign, GeneralInfo, Header, SecurityFeatures, Status } from "./components";
import * as styles from "./styles";

export interface ContentProps {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  documentDesignQuestionsInfo: api.DocumentDesignQuestion[];
  documentSecurityFeaturesInfo: api.SecurityFeature[];
  onRenameClick: () => void;
  onEncryptionInfoClick: () => void;
  onChangeDocumentType: (value: DocumentType) => void;
  onChangeDocumentMaterial: (value: DocumentMaterial) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
  onChangeDocumentDesignAnswer: (value: DocumentDesignAnswer) => void;
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