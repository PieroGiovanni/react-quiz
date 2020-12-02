import React, { useState } from "react";
import { start } from "repl";
import { QuestionCard } from "./components/QuestionCard";
import { fetchQuizQuestions, Dificulty } from "./API";

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Dificulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="startButton" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Question ...</p>
      {/* <QuestionCard
        queestionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answer={questions[number].answer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="nextButton" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
