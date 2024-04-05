import { useReducer } from "react";
import { QuizItem } from "../components/Quiz";
import { QuizAction, StateType } from "./types";

export const useQuiz = () => {
  const initialState: StateType = {
    currentQuestionIndex: 0,
    correctAnswers: 0,
    finalScore: 0,
    questions: [],
  };

  const randomQuizGenerator = (questions: QuizItem[]) => {
    return questions;
  };

  function quizReducer(state: StateType, action: QuizAction) {
    switch (action.type) {
      case "START_QUIZ": {
        return {
          ...initialState,
          currentQuestionIndex: 1,
          questions: randomQuizGenerator(action.payload.quiz),
        };
      }
      case "NEXT_QUESTION":
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          correctAnswers: action.payload.isCorrect
            ? state.correctAnswers + 1
            : state.correctAnswers,
          finalScore:
            state.currentQuestionIndex == state.questions.length
              ? (state.correctAnswers * 100) / state.questions.length
              : 0,
        };
      case "RESET_QUIZ": {
        return {
          ...initialState,
          questions: randomQuizGenerator(state.questions),
        };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const startQuiz = (quiz: QuizItem[]) => {
    dispatch({ type: "START_QUIZ", payload: { quiz } });
  };
  const restartQuiz = () => {
    dispatch({ type: "RESET_QUIZ" });
  };
  const nextQuestion = (userAnswer: boolean) => {
    dispatch({ type: "NEXT_QUESTION", payload: { isCorrect: userAnswer } });
  };
  const getCurrentQuestion = () => {
    return state.questions[state.currentQuestionIndex];
  };

  return {
    ...state,
    currentQuestion: getCurrentQuestion(),
    startQuiz,
    nextQuestion,
    restartQuiz,
  };
};
