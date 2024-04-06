
export enum QuestionType {
  Text="text",
  Multiple="multiple",
  Boolean="boolean",  
};

enum QuestionDifficulty {
  Easy="easy",
  Medium="medium",
  Hard="hard"
};

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

export type QuizProps = {
  questions: QuizItem[];
};