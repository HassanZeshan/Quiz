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