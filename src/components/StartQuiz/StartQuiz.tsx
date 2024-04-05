import { useQuiz } from "../../hooks/useQuiz";
import { QuizItem } from "../Quiz";
type StartQuizProps = {
  questions: QuizItem[];
};

const StartQuiz: React.FC<StartQuizProps> = ({ questions }) => {
  const { startQuiz } = useQuiz();
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
