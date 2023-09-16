import { FC, useRef, useState } from "react";
import * as rpc from "@@rpc/shared";
import { DocumentScoreTarget, DocumentSpecs, DocumentStandardCompliance, DocumentType, ProjectStatus } from "@@core";
import { Button, ButtonKind, Icons, ScrollController, TabControl } from "@@view/components";
import { DocumentDesign, GeneralInfo, Header, Section, SecurityFeatures, Status } from "./components";
import * as styles from "./styles";

enum TabControlItem {
  GeneralInfo = "GeneralInfo",
  DocumentDesign = "DocumentDesign",
  SecurityFeatures = "SecurityFeatures",
}

export interface ContentProps {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  designQuestions: rpc.DocumentDesignQuestion[];
  securityFeatures: rpc.SecurityFeature[];
  onRenameClick: () => void;
  onExportClick: () => void;
  onEncryptionInfoClick: () => void;
  onChangeDocumentType: (value: DocumentType) => void;
  onChangeDocumentMaterial: (value: rpc.SFMaterial) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
  onChangeDocumentDesignAnswer: (value: rpc.DocumentDesignFormAnswer) => void;
  onChangeDocumentSecurityFeatures: (value: number[]) => void;
}

export const Content: FC<ContentProps> = (props) => {
  const [tabControlActiveItem, setTabControlActiveItem] = useState(TabControlItem.GeneralInfo);
  return (
    <ScrollController>
      {(containerRef) => (
        <div ref={containerRef} css={styles.root}>
          <Section>
            <Status value={props.status} />
            <Header
              title={props.title}
              onRenameClick={props.onRenameClick}
              onExportClick={props.onExportClick}
              onEncryptionInfoClick={props.onEncryptionInfoClick}
            />
          </Section>
          <TabControl
            items={[
              {
                key: TabControlItem.GeneralInfo,
                title: "1 - General Info",
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
                key: TabControlItem.DocumentDesign,
                title: "2 - Document Design",
                content: () => (
                  <DocumentDesign
                    documentSpecs={props.documentSpecs}
                    designQuestions={props.designQuestions}
                    onChangeDesignAnswer={props.onChangeDocumentDesignAnswer}
                  />
                ),
              },
              {
                key: TabControlItem.SecurityFeatures,
                title: "3 - Security Features",
                content: () => (
                  <SecurityFeatures
                    documentSpecs={props.documentSpecs}
                    securityFeatures={props.securityFeatures}
                    onChange={props.onChangeDocumentSecurityFeatures}
                  />
                ),
              },
            ]}
            activeItemKey={tabControlActiveItem}
            stickedTabs={true}
            tabsXPadding={styles.tabsXPadding}
            onChangeActiveItem={(item) => setTabControlActiveItem(item as TabControlItem)}
          />
        </div>
      )}
    </ScrollController>
  );
};
