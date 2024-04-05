import { QuizProps } from ".";
import { useQuizContext } from "../../context/quizContext";
import Question from "../Question/Question";
import { StartQuiz } from "../StartQuiz";
import { Summary } from "../Summary";

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { finalScore, currentQuestionIndex, currentQuestion } =
    useQuizContext();
  return (
    <>
      {finalScore && <Summary />}
      {!currentQuestionIndex && <StartQuiz questions={questions} />}
      {currentQuestion && <Question />}
    </>
  );
};

export default Quiz;
