import { QuizProps } from ".";
import { useQuiz } from "../../hooks/useQuiz";
import Question from "../Question/Question";
import { StartQuiz } from "../StartQuiz";
import { Summary } from "../Summary";

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { finalScore, currentQuestionIndex, currentQuestion } = useQuiz();

  console.log(currentQuestion, "currentQuestion...");
  return (
    <>      
      {finalScore && <Summary />}
      {!currentQuestionIndex && <StartQuiz questions={questions} />}
      {currentQuestion && <Question />}
    </>
  );
};

export default Quiz;
