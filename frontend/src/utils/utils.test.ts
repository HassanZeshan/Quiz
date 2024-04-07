import { describe, expect, it } from 'vitest';
import {
    shuffleQuizQuestions,
    shuffleArray,
    adjustQuestionAnswers,
    calculateFinalScore,
  } from './utils';
import { mockData } from '../test/mockData';
  
  describe('Utility Methods', () => {
   const {state}=mockData;
   const {questions}=state;
  
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
        expect(finalScore).toEqual(66.67); 
      });
  
      it('returns result if all questions are even not answered', () => {
           state.currentQuestionIndex=2;           
        const finalScore = calculateFinalScore(state);
        expect(finalScore).toEqual(-1);        
      });
    });
  });
  