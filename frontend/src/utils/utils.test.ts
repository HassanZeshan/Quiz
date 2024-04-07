import { describe, expect, it } from 'vitest';
import {
    shuffleQuizQuestions,
    shuffleArray,
    adjustQuestionAnswers,
    calculateFinalScore,
  } from './utils';

import { QuizItem, StateType } from '@hooks/types';
  
  describe('Utility Methods', () => {
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
  
    describe('shuffleQuizQuestions', () => {
      it('shuffles an array of quiz questions', () => {
       
        const shuffledQuestions = shuffleQuizQuestions(questions);        
        expect(shuffledQuestions.length).toEqual(questions.length);
        
      });
    });
  
    describe('shuffleArray', () => {
      it('shuffles an array', () => {
        const array = ['A', 'B', 'C', 'D'];
        const shuffledArray = shuffleArray(array);
        expect(shuffledArray).not.toEqual(array);
        expect(shuffledArray.length).toEqual(array.length);
        
      });
    });
  
    describe('adjustQuestionAnswers', () => {
      it('adjusts question answers by shuffling them', () => {       
        const adjustedQuestions = adjustQuestionAnswers(questions);
        adjustedQuestions.forEach(question => {
          expect(question.answers).toContain(question.correct_answer);
          expect(question.answers.length).toEqual(question.incorrect_answers.length + 1);
          
        });
      });
    });
  
    describe('calculateFinalScore', () => {
      it('calculates the final score', () => {
        
        const finalScore = calculateFinalScore(state);
        console.log(finalScore)
        expect(finalScore).toEqual(66.67); 
      });
  
      it('returns result if all questions are even not answered', () => {
           state.currentQuestionIndex=2;           
        const finalScore = calculateFinalScore(state);
        expect(finalScore).toEqual(-1);        
      });
    });
  });
  