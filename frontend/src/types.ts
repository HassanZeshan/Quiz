import { Dispatch, SetStateAction } from "react";

export enum QuestionType {
  Text="text",
  Multiple="multiple",
  Boolean="boolean",  
}

enum QuestionDifficulty {
  Easy="easy",
  Medium="medium",
  Hard="hard"
}

export interface QuizItem {
  category: string;
  type: `${QuestionType}`;
  difficulty: `${QuestionDifficulty}`;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];  
  selectedValue:string;
}
export interface StateType {
    currentQuestionIndex: number;
    correctAnswers: number;
    attemptedQuestion:number;
    finalScore: number;
    questions: QuizItem[];
    isLoading: boolean;
    error: string | null;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    setError: Dispatch<SetStateAction<string | null>>;

}
export enum ActionType {
  "NEXT_QUESTION",
  "RESET_QUIZ",
  "START_QUIZ",
  "INITIALIZE"
}

export type QuizAction =
  | { type: ActionType.NEXT_QUESTION ; payload: { userAnswer: string } }
  | { type: ActionType.RESET_QUIZ }
  | { type: ActionType.START_QUIZ} 
  | { type: ActionType.INITIALIZE; payload: { quiz: QuizItem[] } };

  export interface ContextStateType extends StateType {
  currentQuestion: QuizItem;
  nextQuestion: (userAnswer: string) => void;
  restartQuiz: () => void;
  startQuiz: () => void;
  initializeQuiz: (quiz: QuizItem[]) => void;
  isLoading: boolean;
  error: string | null;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
}