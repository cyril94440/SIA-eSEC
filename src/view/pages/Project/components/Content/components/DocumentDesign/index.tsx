import { FC } from "react";
import * as api from "@@api/common";
import { DocumentDesignAnswer, DocumentSpecs } from "@@core";
import { CommentsWrap, RadioGroup } from "@@view/components";
import { Label } from "../Label";
import { Text } from "../Text";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";

export interface DocumentDesignProps {
  documentSpecs: DocumentSpecs;
  documentDesignQuestionsInfo: api.DocumentDesignQuestion[];
  onChangeDocumentDesignAnswer: (value: DocumentDesignAnswer) => void;
}

export const DocumentDesign: FC<DocumentDesignProps> = (props) => {
  return (
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
      {props.documentDesignQuestionsInfo.map((question, questionIndex) => {
        const value = props.documentSpecs.designAnswers.find((a) => a.questionId === question.id)?.answerId ?? null;
        return (
          <SectionItem key={question.id} fullWidth={false}>
            <Label>{`${questionIndex + 1} - ${question.questionTitle}`}</Label>
            <CommentsWrap text="No comments yet">
              <RadioGroup
                value={value}
                items={question.answers.map((answer) => {
                  return {
                    value: answer.id,
                    content: answer.answerTitle,
                  };
                })}
                onChange={(answerId: number) => {
                  props.onChangeDocumentDesignAnswer({ questionId: question.id, answerId });
                }}
              />
            </CommentsWrap>
          </SectionItem>
        );
      })}
    </Section>
  );
};
