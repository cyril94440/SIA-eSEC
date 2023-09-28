import { FC } from "react";
import {
  DocumentScoreTarget,
  DocumentStandardCompliance,
  DocumentType,
  formatDocumentMaterialString,
  formatDocumentScoreTargetString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  isDocumentMaterialValid,
  ProjectSpecs,
} from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { CardSelect, Icons, Select } from "@@view/components";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";

export interface GeneralInfoProps {
  specs: ProjectSpecs;
  onChangeDocumentType: (value: DocumentType) => void;
  onChangeDocumentMaterial: (value: Rpc.SFMaterial) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
}

export const GeneralInfo: FC<GeneralInfoProps> = (props) => {
  return (
    <Section>
      <SectionItem title="Document Type" fullWidth={true}>
        <CardSelect
          value={props.specs.document.type}
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
          value={props.specs.document.material.toString()}
          items={
            //
            [
              { value: Rpc.SFMaterial.Plastic, icon: Icons.DocumentMaterialPlastic },
              { value: Rpc.SFMaterial.Paper, icon: Icons.DocumentMaterialPaper },
            ].map(({ value, icon }) => {
              return isDocumentMaterialValid(value, props.specs.document.type)
                ? {
                    value: value.toString(),
                    Icon: icon,
                    label: formatDocumentMaterialString(value),
                  }
                : null;
            })
          }
          onChange={(value) => props.onChangeDocumentMaterial(Number.parseInt(value, 10) as Rpc.SFMaterial)}
        />
      </SectionItem>
      <SectionItem title="Standard Compliance" fullWidth={false}>
        <Select
          value={props.specs.document.standardCompliance}
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
          value={props.specs.document.scoreTarget}
          items={[DocumentScoreTarget.ICAO, DocumentScoreTarget.None]}
          itemId={(item) => item}
          itemText={(item) => formatDocumentScoreTargetString(item)}
          onChange={props.onChangeDocumentScoreTarget}
        />
      </SectionItem>
    </Section>
  );
};
