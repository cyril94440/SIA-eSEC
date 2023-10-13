import { FC } from "react";
import {
  DocumentStandardTarget,
  formatDocumentStandardTargetString,
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
  onChangeDocumentStandardTarget: (value: DocumentStandardTarget) => void;
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
      <SectionItem title="Standard Target" fullWidth={false}>
        <Select
          value={props.specs.document.standardTarget}
          items={[
            DocumentStandardTarget.ECOWAS_ID_CARD,
            DocumentStandardTarget.EU_ID_CARD,
            DocumentStandardTarget.EU_PASSPORT,
            DocumentStandardTarget.EU_RESIDENT_PERMIT,
            DocumentStandardTarget.ICAO,
            DocumentStandardTarget.ICAO_DOC_9303,
          ]}
          itemId={(item) => item}
          itemText={(item) => formatDocumentStandardTargetString(item)}
          onChange={props.onChangeDocumentStandardTarget}
        />
      </SectionItem>
    </Section>
  );
};
