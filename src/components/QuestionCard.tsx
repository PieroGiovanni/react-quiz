import React from "react";

interface QuestionCardProps {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: any;
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
        {props.answer.map((answer) => (
          <div>
            <button disabled={props.userAnswer} onClick={props.callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
