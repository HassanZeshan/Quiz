import { useReducer } from "react";
import { QuizItem } from "../components/Quiz";
import { QuizAction, StateType } from "./types";
import { adjustQuestionAnswers, shuffleQuizQuestions } from "../utils/utils";

export const useQuiz = () => {
  const initialState: StateType = {
    currentQuestionIndex: -1,
    correctAnswers: 0,
    attemptedQuestion:0,
    finalScore: -1,
    questions: [],
  }; 


  const calculateFinalScore = (state: StateType) => {       
    return state.currentQuestionIndex  === state.questions.length
      ? parseFloat(
          ((state.correctAnswers / state.questions.length) * 100).toFixed(2)
        )
      : -1;
  };

  const quizReducer = (state: StateType, action: QuizAction)=>  {
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
      case "NEXT_QUESTION":{
        const correct_answer=state.questions[state.currentQuestionIndex].correct_answer.toLowerCase();
        const user_answer=action.payload.userAnswer.toLowerCase();       
        
      const updatedState={
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          attemptedQuestion:user_answer.trim().length>0?state.attemptedQuestion+1:state.attemptedQuestion,
          correctAnswers: correct_answer===user_answer
            ? state.correctAnswers + 1
            : state.correctAnswers,          
        };

        return {
          ...updatedState,
          finalScore: calculateFinalScore(updatedState),
        };        
      } 
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
  const nextQuestion = (userAnswer: string) => {
    dispatch({ type: "NEXT_QUESTION", payload: { userAnswer } });
  };
  const getCurrentQuestion =()=> {
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
