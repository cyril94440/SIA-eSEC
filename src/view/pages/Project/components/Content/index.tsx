import { FC, useState } from "react";
import { DocumentSecurityFeatureTree, DocumentStandardTarget, ProjectSpecs } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { ScrollController, TabControl } from "@@view/components";
import { DocumentDesign, GeneralInfo, Header, Section, SecurityFeatures, Status } from "./components";
import * as styles from "./styles";

enum TabControlItem {
  GeneralInfo = "GeneralInfo",
  DocumentDesign = "DocumentDesign",
  SecurityFeatures = "SecurityFeatures",
}

export interface ContentProps {
  specs: ProjectSpecs;
  documentSecurityFeatureTree: DocumentSecurityFeatureTree;
  designQuestions: Rpc.DocumentDesignQuestion[];
  onRenameClick: (title: string) => void;
  onEncryptionInfoClick: () => void;
  onSaveClick: () => void;
  onChangeDocumentType: (value: Rpc.SFDocumentType) => void;
  onChangeDocumentStandardTarget: (value: DocumentStandardTarget) => void;
  onChangeDocumentDesignAnswer: (value: Rpc.DocumentDesignFormAnswer) => void;
  onChangeDocumentSecurityFeatures: (value: number[]) => void;
}

export const Content: FC<ContentProps> = (props) => {
  const [tabControlActiveItem, setTabControlActiveItem] = useState(TabControlItem.GeneralInfo);
  return (
    <ScrollController>
      {(containerRef) => (
        <div ref={containerRef} css={styles.root}>
          <Section>
            <Header
              title={props.specs.title}
              onRenameClick={props.onRenameClick}
              onEncryptionInfoClick={props.onEncryptionInfoClick}
              onSaveClick={props.onSaveClick}
            />
          </Section>
          <TabControl
            items={[
              {
                key: TabControlItem.GeneralInfo,
                title: "1 - General Info",
                content: () => (
                  <GeneralInfo
                    specs={props.specs}
                    onChangeDocumentType={props.onChangeDocumentType}
                    onChangeDocumentStandardTarget={props.onChangeDocumentStandardTarget}
                  />
                ),
              },
              {
                key: TabControlItem.DocumentDesign,
                title: "2 - Document Design",
                content: () => (
                  <DocumentDesign
                    specs={props.specs}
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
                    specs={props.specs}
                    documentSecurityFeatureTree={props.documentSecurityFeatureTree}
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
