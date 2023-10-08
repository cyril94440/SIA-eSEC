import { FC } from "react";
import {
  DocumentScoreTarget,
  DocumentStandardCompliance,
  formatDocumentScoreTargetString,
  formatDocumentStandardComplianceString,
  formatDocumentTypeString,
  ProjectSpecs,
} from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { CardSelect, Icons, Select } from "@@view/components";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";

export interface GeneralInfoProps {
  specs: ProjectSpecs;
  onChangeDocumentType: (value: Rpc.SFDocumentType) => void;
  onChangeDocumentStandardCompliance: (value: DocumentStandardCompliance) => void;
  onChangeDocumentScoreTarget: (value: DocumentScoreTarget) => void;
}

export const GeneralInfo: FC<GeneralInfoProps> = (props) => {
  return (
    <Section>
      <SectionItem title="Document Type" fullWidth={true}>
        <CardSelect
          value={props.specs.document.type.toString()}
          items={[
            {
              value: Rpc.SFDocumentType.Card.toString(),
              Icon: Icons.DocumentTypeIdCard,
              label: formatDocumentTypeString(Rpc.SFDocumentType.Card),
            },
            {
              value: Rpc.SFDocumentType.PassportPaper.toString(),
              Icon: Icons.DocumentTypePassport,
              label: formatDocumentTypeString(Rpc.SFDocumentType.PassportPaper),
            },
            {
              value: Rpc.SFDocumentType.PassportPlastic.toString(),
              Icon: Icons.DocumentTypePassport,
              label: formatDocumentTypeString(Rpc.SFDocumentType.PassportPlastic),
            },
          ]}
          onChange={(value) => props.onChangeDocumentType(Number.parseInt(value, 10) as Rpc.SFDocumentType)}
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
