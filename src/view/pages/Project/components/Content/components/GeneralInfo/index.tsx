import { FC } from "react";
import {
  DocumentScoreTarget,
  DocumentSpecs,
  DocumentStandardCompliance,
  DocumentType,
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  isDocumentMaterialValid,
} from "@@core";
import { SFMaterial } from "@@rpc/shared";
import { CardSelect, Icons, Select } from "@@view/components";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";

export interface GeneralInfoProps {
  documentSpecs: DocumentSpecs;
  onChangeDocumentType: (value: DocumentType) => void;
  onChangeDocumentMaterial: (value: SFMaterial) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
}

export const GeneralInfo: FC<GeneralInfoProps> = (props) => {
  return (
    <Section>
      <SectionItem title="Document Type" fullWidth={true}>
        <CardSelect
          value={props.documentSpecs.type}
          items={[
            {
              value: DocumentType.PASSPORT,
              Icon: Icons.DocumentTypePassport,
              label: formatDocumentTypeString(DocumentType.PASSPORT),
            },
            {
              value: DocumentType.ID_CARD,
              Icon: Icons.DocumentTypeIdCard,
              label: formatDocumentTypeString(DocumentType.ID_CARD),
            },
          ]}
          onChange={(value) => props.onChangeDocumentType(value as DocumentType)}
        />
      </SectionItem>
      <SectionItem title="Material" fullWidth={true}>
        <CardSelect
          value={props.documentSpecs.material.toString()}
          items={
            //
            [
              { value: SFMaterial.Plastic, icon: Icons.DocumentMaterialPlastic },
              { value: SFMaterial.Paper, icon: Icons.DocumentMaterialPaper },
            ].map(({ value, icon }) => {
              return isDocumentMaterialValid(value, props.documentSpecs.type)
                ? {
                    value: value.toString(),
                    Icon: icon,
                    label: formatDocumentMaterialString(value),
                  }
                : null;
            })
          }
          onChange={(value) => props.onChangeDocumentMaterial(Number.parseInt(value, 10) as SFMaterial)}
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
  );
};
