import { useQuizContext } from "@context/quizContext";
import styled from "styled-components";

const SummaryRow = styled.div`
  justify-content: center;

  > div {
    text-align: left;
  }

  .label {
    text-align: right;
  }
`;

const QuizSummary = () => {
  const {
    restartQuiz,
    finalScore,
    correctAnswers,
    questions,
    attemptedQuestion,
  } = useQuizContext();

  return (
    <div>
      <h1>Result</h1>
      <hr />
      <div className="row mb-4">
        <SummaryRow className="row">
          <div className="col-3 label"> Correct:</div>
          <div className="col-3">{correctAnswers}</div>
        </SummaryRow>
        <SummaryRow className="row">
          <div className="col-3 label"> Wrong:</div>
          <div className="col-3">{questions.length - correctAnswers}</div>
        </SummaryRow>
        <SummaryRow className="row">
          <div className="col-3 label"> Question Answered:</div>
          <div className="col-3">{attemptedQuestion}</div>
        </SummaryRow>
        <SummaryRow className="row">
          <div className="col-3 label"> Final Score:</div>
          <div className="col-3">{finalScore}%</div>
        </SummaryRow>
      </div>
      <hr />
      <button className="btn btn-primary" onClick={restartQuiz}>
        Restart
      </button>
    </div>
  );
};

export default QuizSummary;
