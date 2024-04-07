import { QuizItem, StateType } from "@hooks/types";

const questions:QuizItem[] = [           
    {
        category: 'General Knowledge',
        type: 'multiple', // Assuming multiple-choice type
        difficulty: 'easy',
        question: 'What is the capital of France?',
        correct_answer: 'Paris',
        incorrect_answers: ['London', 'Berlin', 'Madrid'],
        answers: ['Paris','London', 'Berlin', 'Madrid'],
        selectedValue: '', 
    },
    {
        category: 'Entertainment: Music',
        type: 'text',
        difficulty: 'hard',
        question: 'Who is known as the King of Pop?',
        correct_answer: 'Michael Jackson',
        incorrect_answers: [],
        answers: [],
        selectedValue: '', 
      },
      {
        category: 'Entertainment: Film',
        type: 'boolean',
        difficulty: 'easy',
        question: 'The movie "The Shawshank Redemption" is based on a Stephen King novel.',
        correct_answer: 'True',
        incorrect_answers: ['False'],
        answers: ['True','False'], 
        selectedValue: '', 
      },
          
          
    ];
    const state:StateType = {
        currentQuestionIndex: 3,
        questions: questions,
        correctAnswers: 2,
        attemptedQuestion:2,
        finalScore:0
      };
export const mockData = {
    state:state,
}


