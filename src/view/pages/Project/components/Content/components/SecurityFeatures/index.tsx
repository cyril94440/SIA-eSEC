import { FC, Fragment } from "react";
import {
  formatDocumentSecurityFeatureCategoryString,
  formatDocumentSecurityFeatureLocationString,
  DocumentSpecs,
} from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { getProjectActiveSecurityFeatures } from "@@store";
import { AccentController, CommentsWrap, MultiSelect, useAccentClient } from "@@view/components";
import { useAppSelector } from "@@view/hooks";
import {
  buildDocumentSecurityFeatureTree,
  DocumentSecurityFeatureCategoryNode,
  DocumentSecurityFeatureLocationNode,
} from "../../utils";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { SectionItem } from "../SectionItem";
import * as styles from "./styles";

export interface SecurityFeaturesProps {
  documentSpecs: DocumentSpecs;
  securityFeatures: Rpc.SecurityFeature[];
  onChange: (value: number[]) => void;
}

export const SecurityFeatures: FC<SecurityFeaturesProps> = (props) => {
  const activeFeaturesInfo = useAppSelector((state) => getProjectActiveSecurityFeatures(state));
  const documentSecurityFeaturesTree = buildDocumentSecurityFeatureTree(activeFeaturesInfo);
  return (
    <AccentController>
      <Section>
        {documentSecurityFeaturesTree.categoryNodes.map((categoryNode) => {
          return (
            <Fragment key={categoryNode.item}>
              <HeaderItem categoryNode={categoryNode} />
              {categoryNode.locationNodes.map((locationNode) => {
                return (
                  <FeatureItem
                    key={locationNode.item}
                    locationNode={locationNode}
                    documentSpecs={props.documentSpecs}
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
  locationNode: DocumentSecurityFeatureLocationNode;
  documentSpecs: DocumentSpecs;
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
            value={props.documentSpecs.securityFeatureIds}
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
