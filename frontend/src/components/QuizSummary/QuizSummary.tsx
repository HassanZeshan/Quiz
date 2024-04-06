import { useQuizContext } from "../../context/quizContext";

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
      <div className="row mb-4">
        <div className="row">
          <div> Correct:</div>
          <div>{correctAnswers}</div>
        </div>
        <div className="row">
          <div> Wrong:</div>
          <div>{questions.length - correctAnswers}</div>
        </div>
        <div className="row">
          <div> Question Answered:</div>
          <div>{attemptedQuestion}</div>
        </div>
        <div className="row">
          <div> Final Score:</div>
          <div>{finalScore}%</div>
        </div>
      </div>
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
