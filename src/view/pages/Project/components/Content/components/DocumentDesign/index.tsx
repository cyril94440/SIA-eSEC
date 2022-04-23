import { FC } from "react";
import * as rpc from "@@rpc/shared";
import { DocumentSpecs } from "@@core";
import { CommentsWrap, RadioGroup, RadioSelect } from "@@view/components";
import { Label } from "../Label";
import { Text } from "../Text";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";

export interface DocumentDesignProps {
  documentSpecs: DocumentSpecs;
  documentDesignQuestionsInfo: rpc.DocumentDesignQuestion[];
  onChangeDocumentDesignAnswer: (value: rpc.DocumentDesignFormAnswer) => void;
}

export const DocumentDesign: FC<DocumentDesignProps> = (props) => {
  return (
    <Section>
      <SectionItem fullWidth={false}>
        <Text>
          Document Design security refers to the physical features, techniques, and characteristics of documents
          including strengthening their security and improving their resistance to attack and misuse. With widespread
          access to low cost technologies including high quality scanning, color copying, image processing and photo
          quality printing, the capacity of individuals to produce convincing counterfeit travel documents and very
          deceptive alterations has increased significantly.
        </Text>
      </SectionItem>
      {props.documentDesignQuestionsInfo.map((question, questionIndex) => {
        const value = props.documentSpecs.designAnswers.find((a) => a.idQuestion === question.id)?.idAnswer ?? null;
        return (
          <SectionItem key={question.id} fullWidth={false}>
            <CommentsWrap text="No comments yet">
              <RadioSelect
                title={`${questionIndex + 1} - ${question.questionTitle}`}
                value={value}
                items={question.answers.map((answer) => {
                  return {
                    value: answer.id,
                    content: answer.answerTitle,
                  };
                })}
                onChange={(answerId: number) => {
                  props.onChangeDocumentDesignAnswer({ idQuestion: question.id, idAnswer: answerId });
                }}
              />
            </CommentsWrap>
          </SectionItem>
        );
      })}
    </Section>
  );
};
