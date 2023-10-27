import { FC, useState } from "react";
import { DocumentSecurityFeatureTree, DocumentStandardTarget, ProjectSpecs } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { Button, ButtonKind, ScrollController, TabControl } from "@@view/components";
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
                  <>
                    <GeneralInfo
                      specs={props.specs}
                      onChangeDocumentType={props.onChangeDocumentType}
                      onChangeDocumentStandardTarget={props.onChangeDocumentStandardTarget}
                    />
                    <div css={styles.buttonsContainer}>
                      <Button title={"Previous"} kind={ButtonKind.Info} disabled fullWidth />
                      <Button
                        fullWidth
                        title={"Next"}
                        kind={ButtonKind.Info}
                        onClick={() => {
                          setTabControlActiveItem(TabControlItem.DocumentDesign);
                        }}
                      />
                    </div>
                  </>
                ),
              },
              {
                key: TabControlItem.DocumentDesign,
                title: "2 - Document Design",
                content: () => (
                  <>
                    <DocumentDesign
                      specs={props.specs}
                      designQuestions={props.designQuestions}
                      onChangeDesignAnswer={props.onChangeDocumentDesignAnswer}
                    />
                    <div css={styles.buttonsContainer}>
                      <Button
                        title={"Previous"}
                        kind={ButtonKind.Info}
                        onClick={() => {
                          setTabControlActiveItem(TabControlItem.GeneralInfo);
                        }}
                        fullWidth
                      />
                      <Button
                        fullWidth
                        title={"Next"}
                        kind={ButtonKind.Info}
                        onClick={() => {
                          setTabControlActiveItem(TabControlItem.SecurityFeatures);
                        }}
                      />
                    </div>
                  </>
                ),
              },
              {
                key: TabControlItem.SecurityFeatures,
                title: "3 - Security Features",
                content: () => (
                  <>
                    <SecurityFeatures
                      specs={props.specs}
                      documentSecurityFeatureTree={props.documentSecurityFeatureTree}
                      onChange={props.onChangeDocumentSecurityFeatures}
                    />
                    <div css={styles.buttonsContainer}>
                      <Button
                        title={"Previous"}
                        kind={ButtonKind.Info}
                        onClick={() => {
                          setTabControlActiveItem(TabControlItem.DocumentDesign);
                        }}
                        fullWidth
                      />
                      <Button fullWidth title={"Next"} kind={ButtonKind.Info} disabled />
                    </div>
                  </>
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
