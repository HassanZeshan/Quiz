import React, { ReactNode, createContext, useContext } from "react";
import { useQuiz } from "@hooks/useQuiz";
import { StateType } from "@hooks/types";
import { QuizItem } from "@components/Quiz";

interface ContextStateType extends StateType {
  currentQuestion: QuizItem;
  nextQuestion: (userAnswer: string) => void;
  restartQuiz: () => void;
  startQuiz: (quiz: QuizItem[]) => void;
}

const QuizContext = createContext<ContextStateType | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within a QuizProvider");
  }
  return context;
};

export const QuizProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const quizState = useQuiz();
  const contextValue: ContextStateType = {
    ...quizState,
    correctAnswers: quizState.correctAnswers,
    questions: quizState.questions,
  };

  return (
    <QuizContext.Provider value={contextValue}>{children}</QuizContext.Provider>
  );
};

export default QuizProvider;
