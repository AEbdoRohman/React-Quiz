import React from "react";
import useQuiz from "../context/useQuiz";

const NextButton = () => {
  const { dispatch, answer, index, numquestions } = useQuiz();
  if (answer === null) return null;
  return (
    <>
      {index < numquestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
      {index === numquestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </>
  );
};

export default NextButton;
