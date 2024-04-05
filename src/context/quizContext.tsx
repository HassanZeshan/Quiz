import React, { ReactNode, createContext, useContext } from "react";
import { useQuiz } from "../hooks/useQuiz";

const QuizContext = createContext<any>(null);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

// Quiz provider component
export const QuizProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const quiz = useQuiz();

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
