import { useContext } from "react";
import { QuizContext } from "./QuizContext";

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export default useQuiz;
