import React from "react";
import { AnswerObject } from "../App";

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
      <p className="number">
        Question: {props.queestionNumber}/{props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question }} />
      <div>
        {props.answers.map((answer) => (
          <div key={answer}>
            <button
              disabled={!!props.userAnswer}
              value={answer}
              onClick={props.callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
