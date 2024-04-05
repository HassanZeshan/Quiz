import { QuizItem } from "../components/Quiz";


export type StateType={
    currentQuestionIndex: number;
    correctAnswers: number,
    finalScore: number,
    questions: QuizItem[]

}

export type QuizAction =
  | { type: "NEXT_QUESTION"; payload: { isCorrect: boolean } }
  | { type: "RESET_QUIZ" }
  | { type: "START_QUIZ"; payload: { quiz: QuizItem[] } };