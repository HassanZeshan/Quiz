import { useQuizContext } from "../../context/quizContext";
import { QuizItem } from "../Quiz";
type StartQuizProps = {
  questions: QuizItem[];
};

const QuizInitiator: React.FC<StartQuizProps> = ({ questions }) => {
  const { startQuiz } = useQuizContext();
  return (
    <div className="col-8">
      <button
        className="btn btn-primary"
        onClick={() => {
          startQuiz(questions);
        }}
      >
        start Quiz
      </button>
    </div>
  );
};

export default QuizInitiator;
