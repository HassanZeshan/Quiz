import { FormEvent } from "react";
import { useQuizContext } from "@context/quizContext";

import styled from "styled-components";
import { Question, QuestionHeader } from "@components/Question";
import { QuizSummary } from "@components/QuizSummary";
import { QuizInitiator } from "@components/QuizInitiator";

const QuizCard = styled.div`
  width: 60rem;
  height: 28rem;
  @media (max-width: 768px) {
    height: 32rem;
  }
`;

const Quiz = () => {
  const { finalScore, currentQuestionIndex, currentQuestion, nextQuestion } =
    useQuizContext();

  const calculateResult = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    nextQuestion(currentQuestion.selectedValue ?? "");
  };

  return (
    <div className="row justify-content-center">
      <QuizCard className="card">
        <div className="card-body">
          {currentQuestionIndex < 0 && <QuizInitiator />}
          {currentQuestion && (
            <>
              <QuestionHeader />
              <hr />
              <form onSubmit={calculateResult}>
                <Question />
                <hr />
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <button className="btn btn-primary" type="submit">
                      Next Question
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
          {finalScore >= 0 && <QuizSummary />}
        </div>
      </QuizCard>
    </div>
  );
};

export default Quiz;
