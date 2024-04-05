import { useQuizContext } from "../../context/quizContext";
import { QuizItem } from "../Quiz";
type StartQuizProps = {
  questions: QuizItem[];
};

const StartQuiz: React.FC<StartQuizProps> = ({ questions }) => {
  const { startQuiz } = useQuizContext();
  return (
    <div>
      start quiz
      <button
        value="start Quiz"
        onClick={() => {
          startQuiz(questions);
        }}
      />
    </div>
  );
};

export default StartQuiz;
