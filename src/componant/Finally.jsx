import React from "react";
import useQuiz from "../context/useQuiz";

const Finally = () => {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  const percentage = Math.round((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} ({percentage}%)
      </p>
      <p className="highscore "> Highscore: {highscore}</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Reset
      </button>
    </>
  );
};

export default Finally;
