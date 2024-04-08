import { useQuizContext } from "@context/quizContext";

const QuizInitiator = () => {
  const { startQuiz } = useQuizContext();
  return (
    <div className="col-auto mt-4 mb-4">
      <h4 className="col-auto mb-6">Enjoy the Ride</h4>
      <hr />
      <button className="btn btn-primary" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default QuizInitiator;
