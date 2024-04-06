import { QuizItem } from "../components/Quiz";
import { StateType } from "../hooks/types";

export const shuffleQuizQuestions = (questions: QuizItem[]): QuizItem[] => {
    for (let currentIndex = questions.length - 1; currentIndex > 0; currentIndex--) {
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
      [questions[currentIndex], questions[randomIndex]] = [questions[randomIndex], questions[currentIndex]];
    }
    return questions;
  };



  export const shuffleArray = (array: string[]): string[] => {
    
    const shuffledArray = [...array];  
    
    for (let currentIndex = shuffledArray.length - 1; currentIndex > 0; currentIndex--) {
    
      const randomIndex = Math.floor(Math.random() * (currentIndex + 1));  
    
      [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
        shuffledArray[randomIndex],
        shuffledArray[currentIndex],
      ];
    } 
    
    return shuffledArray;
  };

  export const adjustQuestionAnswers = (questions: QuizItem[]): QuizItem[] => {
    return questions.map((question: QuizItem) => {
      const incorrectAnswers = Array.isArray(question.incorrect_answers)
        ? question.incorrect_answers
        : [];

      return {
        ...question,
        answers: shuffleArray([...incorrectAnswers, question.correct_answer]),
        name:'',
        value:'',        
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
