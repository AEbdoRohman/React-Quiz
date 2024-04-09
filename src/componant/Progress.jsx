import React from "react";
import useQuiz from "../context/useQuiz";

const Progress = () => {
  const { index, points, numquestions, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        max={numquestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        Question {index + 1}/{numquestions}
      </p>
      <p>
        {points} / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
