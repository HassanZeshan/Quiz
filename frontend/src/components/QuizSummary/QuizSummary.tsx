import { useQuizContext } from "@context/quizContext";

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
        <div className="row justify-content-center summary-row">
          <div className="col-3 label"> Correct:</div>
          <div className="col-3">{correctAnswers}</div>
        </div>
        <div className="row justify-content-center summary-row">
          <div className="col-3 label"> Wrong:</div>
          <div className="col-3">{questions.length - correctAnswers}</div>
        </div>
        <div className="row justify-content-center summary-row">
          <div className="col-3 label"> Question Answered:</div>
          <div className="col-3">{attemptedQuestion}</div>
        </div>
        <div className="row justify-content-center summary-row">
          <div className="col-3 label"> Final Score:</div>
          <div className="col-3">{finalScore}%</div>
        </div>
      </div>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          restartQuiz();
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default QuizSummary;
