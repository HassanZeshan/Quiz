import { useQuizContext } from "../../context/quizContext";
import { QuizItem } from "../Quiz";
type StartQuizProps = {
  questions: QuizItem[];
};

const QuizInitiator: React.FC<StartQuizProps> = ({ questions }) => {
  const { startQuiz } = useQuizContext();
  return (
    <div className="col-auto mt-4 mb-4">
      <h4 className="col-auto mb-6">Enjoy the Ride</h4>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          startQuiz(questions);
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default QuizInitiator;
