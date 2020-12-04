import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

interface QuestionCardProps {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  queestionNumber: number;
  totalQuestions: number;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ ...props }) => {
  return (
    <div>
      <Wrapper>
        <p className="number">
          Question: {props.queestionNumber}/{props.totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: props.question }} />
        <div>
          {props.answers.map((answer) => (
            <div key={answer}>
              <ButtonWrapper
                key={answer}
                correct={props.userAnswer?.correctAnswer === answer}
                userClicked={props.userAnswer?.answer === answer}
              >
                <button
                  className="questionButton"
                  disabled={!!props.userAnswer ? true : false}
                  value={answer}
                  onClick={props.callback}
                >
                  <span dangerouslySetInnerHTML={{ __html: answer }} />
                </button>
              </ButtonWrapper>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};
