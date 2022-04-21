import { FC, Fragment } from "react";
import * as rpc from "@@rpc/shared";
import {
  formatDocumentSecurityFeatureCategoryString,
  formatDocumentSecurityFeatureLocationString,
  DocumentSpecs,
} from "@@core";
import { CommentsWrap, MultiSelect } from "@@view/components";
import { buildDocumentSecurityFeatureTree } from "../../utils";
import { Section } from "../Section";
import { SectionHeader } from "../SectionHeader";
import { SectionItem } from "../SectionItem";

export interface SecurityFeaturesProps {
  documentSpecs: DocumentSpecs;
  documentSecurityFeaturesInfo: rpc.SecurityFeature[];
  onChangeDocumentSecurityFeatures: (value: number[]) => void;
}

export const SecurityFeatures: FC<SecurityFeaturesProps> = (props) => {
  const documentSecurityFeaturesTree = buildDocumentSecurityFeatureTree(props.documentSecurityFeaturesInfo);
  // console.log("documentSecurityFeaturesTree", documentSecurityFeaturesTree);
  return (
    <Section title="3 - Security Features">
      {documentSecurityFeaturesTree.categoryNodes.map((categoryNode) => {
        return (
          <Fragment key={categoryNode.item}>
            <SectionHeader>{formatDocumentSecurityFeatureCategoryString(categoryNode.item)}</SectionHeader>
            {categoryNode.locationNodes.map((locationNode) => {
              const featureIds = locationNode.features.map((f) => f.id);
              const featureMap = new Map(locationNode.features.map((f) => [f.id, f]));
              return (
                <SectionItem
                  key={locationNode.item}
                  title={formatDocumentSecurityFeatureLocationString(locationNode.item)}
                  fullWidth={false}
                >
                  <CommentsWrap text="No comments yet">
                    <MultiSelect<number>
                      title="Select your feature"
                      value={props.documentSpecs.securityFeatures}
                      items={featureIds}
                      itemId={(id) => id.toString()}
                      itemContent={(id) => featureMap.get(id)?.title}
                      onChange={(ids) => props.onChangeDocumentSecurityFeatures(ids)}
                    />
                  </CommentsWrap>
                </SectionItem>
              );
            })}
          </Fragment>
        );
      })}
    </Section>
  );
};
