import { FC } from "react";
import {
  DocumentMaterial,
  DocumentScoreTarget,
  DocumentSecurityFeature,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType,
  ProjectStatus,
} from "@@types";
import {
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentSecurityFeatureString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
} from "@@utils";
import { CardSelect, CommentsWrap, Icons, MultiSelect, RadioGroup, Select } from "@@view/components";
import * as sharedStyles from "@@view/styles";
import { Label, Text, Header, Section, SectionItem, Status } from "./components";
import * as styles from "./styles";

export interface ContentProps {
  title: string;
  status: ProjectStatus;
  documentSpecs: DocumentSpecs;
  onRenameClick: () => void;
  onEncryptionInfoClick: () => void;
  onChangeDocumentType: (value: DocumentType) => void;
  onChangeDocumentMaterial: (value: DocumentMaterial) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
  onChangeDocumentDesignAnswer1: (value: boolean) => void;
  onChangeDocumentDesignAnswer2: (value: boolean) => void;
  onChangeDocumentSecurityFeatures: (value: DocumentSecurityFeature[]) => void;
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
      <Section title="1 - General Info">
        <SectionItem title="Document Type" fullWidth={true}>
          <CardSelect
            value={props.documentSpecs.type}
            items={[
              {
                value: DocumentType.PASSPORT,
                icon: Icons.DocumentTypePassport,
                label: formatDocumentTypeString(DocumentType.PASSPORT),
              },
              {
                value: DocumentType.ID_CARD,
                icon: Icons.DocumentTypeIdCard,
                label: formatDocumentTypeString(DocumentType.ID_CARD),
              },
              {
                value: DocumentType.DRIVING_LICENSE,
                icon: Icons.DocumentTypeDriving,
                label: formatDocumentTypeString(DocumentType.DRIVING_LICENSE),
              },
              {
                value: DocumentType.OTHER,
                icon: Icons.DocumentTypeOther,
                label: formatDocumentTypeString(DocumentType.OTHER),
              },
            ]}
            onChange={(value) => props.onChangeDocumentType(value as DocumentType)}
          />
        </SectionItem>
        <SectionItem title="Material" fullWidth={true}>
          <CardSelect
            value={props.documentSpecs.material}
            items={[
              {
                value: DocumentMaterial.PLASTIC,
                icon: Icons.DocumentMaterialPlastic,
                label: formatDocumentMaterialString(DocumentMaterial.PLASTIC),
              },
              {
                value: DocumentMaterial.PAPER,
                icon: Icons.DocumentMaterialPaper,
                label: formatDocumentMaterialString(DocumentMaterial.PAPER),
              },
            ]}
            onChange={(value) => props.onChangeDocumentMaterial(value as DocumentMaterial)}
          />
        </SectionItem>
        <SectionItem title="Standard Compliance" fullWidth={false}>
          <Select
            value={props.documentSpecs.standardCompliance}
            items={[
              DocumentStandardCompliance.ECOWAS_ID_CARD,
              DocumentStandardCompliance.EU_ID_CARD,
              DocumentStandardCompliance.EU_PASSPORT,
              DocumentStandardCompliance.EU_RESIDENT_PERMIT,
              DocumentStandardCompliance.ICAO,
            ]}
            itemId={(item) => item}
            itemText={(item) => formatDocumentStandardComplianceString(item)}
            onChange={props.onChangeDocumentStandardCompliance}
          />
        </SectionItem>
        <SectionItem title="Score Target" fullWidth={false}>
          <Select
            value={props.documentSpecs.scoreTarget}
            items={[DocumentScoreTarget.THEORICAL_MAXIMUM, DocumentScoreTarget.SIA_RECO]}
            itemId={(item) => item}
            itemText={(item) => formatDocumentScoreTargetString(item)}
            onChange={props.onChangeDocumentScoreTarget}
          />
        </SectionItem>
      </Section>
      <Section title="2 - Document Design">
        <SectionItem fullWidth={true}>
          <Text>
            Document Design security refers to the physical features, techniques, and characteristics of documents
            including strengthening their security and improving their resistance to attack and misuse. With widespread
            access to low cost technologies including high quality scanning, color copying, image processing and photo
            quality printing, the capacity of individuals to produce convincing counterfeit travel documents and very
            deceptive alterations has increased significantly.
          </Text>
        </SectionItem>
        <SectionItem fullWidth={false}>
          <Label>1 - Is the security design based on a risk analysis and is it documented ?</Label>
          <CommentsWrap text="No comments yet">
            <RadioGroup
              value={props.documentSpecs.designAnswer1}
              items={[
                {
                  value: true,
                  content: "Yes - all aspects blablablablablablablablablablablablablab",
                },
                {
                  value: false,
                  content: "No - all aspects blablablablablablablablablablablablablablablablablabla",
                  activeBackgroundColor: sharedStyles.COLOR_CRITICAL_50,
                },
              ]}
              onChange={props.onChangeDocumentDesignAnswer1}
            />
          </CommentsWrap>
        </SectionItem>
        <SectionItem fullWidth={false}>
          <Label>2 - Is the security design based on a risk analysis and is it documented ?</Label>
          <CommentsWrap text="No comments yet">
            <RadioGroup
              value={props.documentSpecs.designAnswer2}
              items={[
                {
                  value: true,
                  content: "Yes - all aspects blablablablablablablablablablablablablab",
                },
                {
                  value: false,
                  content: "No - all aspects blablablablablablablablablablablablablablablablablabla",
                  activeBackgroundColor: sharedStyles.COLOR_CRITICAL_50,
                },
              ]}
              onChange={props.onChangeDocumentDesignAnswer2}
            />
          </CommentsWrap>
        </SectionItem>
      </Section>
      <Section title="3 - Security Features">
        <SectionItem title="IR" fullWidth={false}>
          <CommentsWrap text="No comments yet">
            <MultiSelect
              title="Select your feature"
              value={props.documentSpecs.securityFeatures}
              items={[
                DocumentSecurityFeature.IR_A,
                DocumentSecurityFeature.IR_B,
                DocumentSecurityFeature.IR_C,
                DocumentSecurityFeature.IR_D,
                DocumentSecurityFeature.IR_E,
                DocumentSecurityFeature.IR_F,
              ]}
              itemId={(item) => item}
              itemContent={(item) => formatDocumentSecurityFeatureString(item)}
              onChange={props.onChangeDocumentSecurityFeatures}
            />
          </CommentsWrap>
        </SectionItem>
        <SectionItem title="Offset Design" fullWidth={false}>
          <CommentsWrap text="No comments yet">
            <MultiSelect
              title="Select your feature"
              value={props.documentSpecs.securityFeatures}
              items={[
                DocumentSecurityFeature.OFFSET_DESIGN_A,
                DocumentSecurityFeature.OFFSET_DESIGN_B,
                DocumentSecurityFeature.OFFSET_DESIGN_C,
                DocumentSecurityFeature.OFFSET_DESIGN_D,
                DocumentSecurityFeature.OFFSET_DESIGN_E,
                DocumentSecurityFeature.OFFSET_DESIGN_F,
                DocumentSecurityFeature.OFFSET_DESIGN_G,
                DocumentSecurityFeature.OFFSET_DESIGN_H,
              ]}
              itemId={(item) => item}
              itemContent={(item) => formatDocumentSecurityFeatureString(item)}
              onChange={props.onChangeDocumentSecurityFeatures}
            />
          </CommentsWrap>
        </SectionItem>
      </Section>
    </div>
  );
};
