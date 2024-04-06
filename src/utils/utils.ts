import { QuizItem } from "../components/Quiz";
import { StateType } from "../hooks/types";

export const shuffleQuizQuestions = (questions: QuizItem[]): QuizItem[] => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    return questions;
  };

  export const shuffleArray=(array: string[]): string[]=> {
    const newArray = [...array]; 

    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[i],
      ];
    }
    return newArray;
  }

  export const adjustQuestionAnswers = (questions: QuizItem[]): QuizItem[] => {
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

  export const calculateFinalScore = (state: StateType) => {       
    return state.currentQuestionIndex  === state.questions.length
      ? parseFloat(
          ((state.correctAnswers / state.questions.length) * 100).toFixed(2)
        )
      : -1;
  };
