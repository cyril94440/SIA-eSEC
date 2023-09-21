import { FC } from "react";
import { ProjectSpecs } from "@@core/project";
import { Rpc } from "@@core/rpc/shared";
import { AccentController, CommentsWrap, RadioSelect, useAccentClient } from "@@view/components";
import { Text } from "../Text";
import { Section } from "../Section";
import { SectionItem } from "../SectionItem";
import * as styles from "./styles";

export interface DocumentDesignProps {
  specs: ProjectSpecs;
  designQuestions: Rpc.DocumentDesignQuestion[];
  onChangeDesignAnswer: (value: Rpc.DocumentDesignFormAnswer) => void;
}

export const DocumentDesign: FC<DocumentDesignProps> = (props) => {
  return (
    <AccentController>
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
        {props.designQuestions.map((question, index) => {
          return (
            <SectionItem key={question.id} fullWidth={false}>
              <QuestionItem
                key={question.id}
                specs={props.specs}
                question={question}
                index={index}
                onChangeDocumentDesignAnswer={props.onChangeDesignAnswer}
              />
            </SectionItem>
          );
        })}
      </Section>
    </AccentController>
  );
};

export interface QuestionItemProps {
  specs: ProjectSpecs;
  question: Rpc.DocumentDesignQuestion;
  index: number;
  onChangeDocumentDesignAnswer: (value: Rpc.DocumentDesignFormAnswer) => void;
}

const QuestionItem: FC<QuestionItemProps> = (props) => {
  const accentClientResult = useAccentClient();
  const value = props.specs.document.designAnswers.find((a) => a.idQuestion === props.question.id)?.idAnswer ?? null;
  return (
    <div css={[styles.accentItem, accentClientResult.muted && styles.accentItemMuted]}>
      <CommentsWrap>
        <RadioSelect
          title={`${props.index + 1} - ${props.question.questionTitle}`}
          value={value}
          items={props.question.answers.map((answer) => {
            return {
              value: answer.id,
              content: answer.answerTitle,
            };
          })}
          onChange={(answerId: number) => {
            props.onChangeDocumentDesignAnswer({ idQuestion: props.question.id, idAnswer: answerId });
          }}
          onDropdownToggle={(expanded) => {
            if (expanded) {
              accentClientResult.acquire();
            } else {
              accentClientResult.release();
            }
          }}
        />
      </CommentsWrap>
    </div>
  );
};
