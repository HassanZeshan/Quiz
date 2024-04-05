import { useReducer } from "react";
import { QuizItem } from "../components/Quiz";
import { QuizAction, StateType } from "./types";

export const useQuiz = () => {
  const initialState: StateType = {
    currentQuestionIndex: -1,
    correctAnswers: 0,
    finalScore: 0,
    questions: [],
  };

  const shuffleQuizQuestions = (questions: QuizItem[]): QuizItem[] => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  };

  function shuffleArray(array: string[]): string[] {
    const newArray = [...array]; // Create a copy of the original array

    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[i],
      ];
    }
    return newArray;
  }

  const calculateFinalScore = (state: StateType) => {
    return state.currentQuestionIndex + 1 === state.questions.length
      ? parseFloat(
          ((state.correctAnswers / state.questions.length) * 100).toFixed(2)
        )
      : 0;
  };

  const adjustQuestionAnswers = (questions: QuizItem[]): QuizItem[] => {
    return questions.map((question: QuizItem) => {
      const incorrectAnswers = Array.isArray(question.incorrect_answers)
        ? question.incorrect_answers
        : [];

      return {
        ...question,
        answers: shuffleArray([...incorrectAnswers, question.correct_answer]),
      };
    });
  };

  const quizReducer = (state: StateType, action: QuizAction) => {
    switch (action.type) {
      case "START_QUIZ": {
        return {
          ...initialState,
          currentQuestionIndex: 0,
          questions: shuffleQuizQuestions(
            adjustQuestionAnswers(action.payload.quiz)
          ),
        };
      }
      case "NEXT_QUESTION":
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          correctAnswers: action.payload.isCorrect
            ? state.correctAnswers + 1
            : state.correctAnswers,
          finalScore: calculateFinalScore(state),
        };
      case "RESET_QUIZ": {
        return {
          ...initialState,
          currentQuestionIndex: 0,
          questions: shuffleQuizQuestions(state.questions),
        };
      }
      default:
        return state;
    }
  };

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
