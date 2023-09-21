import { FC, Fragment } from "react";
import {
  formatDocumentSecurityFeatureCategoryString,
  formatDocumentSecurityFeatureLocationString,
  DocumentSecurityFeatureTree,
  DocumentSecurityFeatureCategoryNode,
  DocumentSecurityFeatureLocationNode,
  ProjectSpecs,
} from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { AccentController, CommentsWrap, MultiSelect, useAccentClient } from "@@view/components";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { SectionItem } from "../SectionItem";
import * as styles from "./styles";

export interface SecurityFeaturesProps {
  specs: ProjectSpecs;
  documentSecurityFeatureTree: DocumentSecurityFeatureTree;
  onChange: (value: number[]) => void;
}

export const SecurityFeatures: FC<SecurityFeaturesProps> = (props) => {
  return (
    <AccentController>
      <Section>
        {props.documentSecurityFeatureTree.categoryNodes.map((categoryNode) => {
          return (
            <Fragment key={categoryNode.item}>
              <HeaderItem categoryNode={categoryNode} />
              {categoryNode.locationNodes.map((locationNode) => {
                return (
                  <FeatureItem
                    key={locationNode.item}
                    specs={props.specs}
                    locationNode={locationNode}
                    onChange={props.onChange}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </Section>
    </AccentController>
  );
};

export interface FeatureItemProps {
  specs: ProjectSpecs;
  locationNode: DocumentSecurityFeatureLocationNode;
  onChange: (value: number[]) => void;
}

export interface HeaderItemProps {
  categoryNode: DocumentSecurityFeatureCategoryNode;
}

export const HeaderItem: FC<HeaderItemProps> = (props) => {
  const accentClientResult = useAccentClient();
  return (
    <div css={[styles.accentItem, accentClientResult.muted && styles.accentItemMuted]}>
      <SectionHeader>{formatDocumentSecurityFeatureCategoryString(props.categoryNode.item)}</SectionHeader>
    </div>
  );
};

export const FeatureItem: FC<FeatureItemProps> = (props) => {
  const accentClientResult = useAccentClient();
  const featureIds = props.locationNode.features.map((f) => f.id);
  const featureMap = new Map(props.locationNode.features.map((f) => [f.id, f]));
  return (
    <div css={[styles.accentItem, accentClientResult.muted && styles.accentItemMuted]}>
      <SectionItem title={formatDocumentSecurityFeatureLocationString(props.locationNode.item)} fullWidth={false}>
        <CommentsWrap>
          <MultiSelect<number>
            title="Select your feature"
            value={props.specs.document.securityFeatureIds}
            items={featureIds}
            itemId={(id) => id.toString()}
            itemContent={(id) => featureMap.get(id)?.title}
            onChange={(ids) => props.onChange(ids)}
            onDropdownToggle={(expanded) => {
              if (expanded) {
                accentClientResult.acquire();
              } else {
                accentClientResult.release();
              }
            }}
          />
        </CommentsWrap>
      </SectionItem>
    </div>
  );
};
