import { QuizItem } from "@components/Quiz";


export interface StateType {
    currentQuestionIndex: number;
    correctAnswers: number;
    attemptedQuestion:number;
    finalScore: number;
    questions: QuizItem[];

}
export enum ActionType {
  "NEXT_QUESTION",
  "RESET_QUIZ",
  "START_QUIZ"
}

export type QuizAction =
  | { type: ActionType.NEXT_QUESTION ; payload: { userAnswer: string } }
  | { type: ActionType.RESET_QUIZ }
  | { type: ActionType.START_QUIZ; payload: { quiz: QuizItem[] } };