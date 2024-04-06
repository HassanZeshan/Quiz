import { QuizItem } from "../components/Quiz";


export interface StateType {
    currentQuestionIndex: number;
    correctAnswers: number;
    attemptedQuestion:number;
    finalScore: number;
    questions: QuizItem[];

}

export type QuizAction =
  | { type: "NEXT_QUESTION"; payload: { userAnswer: string } }
  | { type: "RESET_QUIZ" }
  | { type: "START_QUIZ"; payload: { quiz: QuizItem[] } };