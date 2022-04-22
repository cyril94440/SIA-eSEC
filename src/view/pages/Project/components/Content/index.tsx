import { FC, useRef, useState } from "react";
import * as rpc from "@@rpc/shared";
import { DocumentScoreTarget, DocumentSpecs, DocumentStandardCompliance, DocumentType, ProjectStatus } from "@@core";
import { GenericAccordion } from "@@view/components";
import { AccordionHeader, DocumentDesign, GeneralInfo, Header, SecurityFeatures, Status } from "./components";
import * as styles from "./styles";

enum AccordionItem {
  GeneralInfo = "GeneralInfo",
  DocumentDesign = "DocumentDesign",
  SecurityFeatures = "SecurityFeatures",
}

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
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeAccordionItem, setActiveAccordionItem] = useState<AccordionItem | null>(AccordionItem.GeneralInfo);
  return (
    <div ref={rootRef} css={styles.root}>
      <Status value={props.status} />
      <Header
        title={props.title}
        onRenameClick={props.onRenameClick}
        onEncryptionInfoClick={props.onEncryptionInfoClick}
      />
      <GenericAccordion
        items={[
          {
            key: AccordionItem.GeneralInfo,
            expanded: activeAccordionItem === AccordionItem.GeneralInfo,
            header: (expanded, click) => (
              <AccordionHeader title="1 - General Info" expanded={expanded} onClick={click} />
            ),
            content: () => (
              <GeneralInfo
                documentSpecs={props.documentSpecs}
                onChangeDocumentType={props.onChangeDocumentType}
                onChangeDocumentMaterial={props.onChangeDocumentMaterial}
                onChangeDocumentStandardCompliance={props.onChangeDocumentStandardCompliance}
                onChangeDocumentScoreTarget={props.onChangeDocumentScoreTarget}
              />
            ),
          },
          {
            key: AccordionItem.DocumentDesign,
            expanded: activeAccordionItem === AccordionItem.DocumentDesign,
            header: (expanded, click) => (
              <AccordionHeader title="2 - Document Design" expanded={expanded} onClick={click} />
            ),
            content: () => (
              <DocumentDesign
                documentSpecs={props.documentSpecs}
                documentDesignQuestionsInfo={props.documentDesignQuestionsInfo}
                onChangeDocumentDesignAnswer={props.onChangeDocumentDesignAnswer}
              />
            ),
          },
          {
            key: AccordionItem.SecurityFeatures,
            expanded: activeAccordionItem === AccordionItem.SecurityFeatures,
            header: (expanded, click) => (
              <AccordionHeader title="3 - Security Features" expanded={expanded} onClick={click} />
            ),
            content: () => (
              <SecurityFeatures
                documentSpecs={props.documentSpecs}
                documentSecurityFeaturesInfo={props.documentSecurityFeaturesInfo}
                onChangeDocumentSecurityFeatures={props.onChangeDocumentSecurityFeatures}
              />
            ),
          },
        ]}
        onItemClick={(key) => {
          const item = key as AccordionItem;
          rootRef.current?.scrollIntoView();
          setActiveAccordionItem(activeAccordionItem !== item ? item : null);
        }}
      />
    </div>
  );
};
