import React, { useEffect } from "react";
import useQuiz from "../context/useQuiz";

const Timer = () => {
  const { dispatch, secondsRemaining } = useQuiz();
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining - minutes * 60;
  // const sec = secondsRemaining % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes < 10 ? `0${minutes}` : minutes} :
      {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
};

export default Timer;
