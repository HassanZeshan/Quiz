import { FormEvent } from "react";
import { QuizProps } from ".";
import { useQuizContext } from "../../context/quizContext";
import Question from "../Question/Question";
import { QuizInitiator } from "../QuizInitiator";
import { QuizSummary } from "../QuizSummary";

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const { finalScore, currentQuestionIndex, currentQuestion, nextQuestion } =
    useQuizContext();

  const calculateResult = (e: FormEvent<HTMLFormElement>) => {
    let formData: string = "";
    const formInputs = (e.target as HTMLElement).querySelectorAll("input");
    formInputs.forEach((input: HTMLInputElement) => {
      if (input.type === "text") {
        formData = input.value;
      } else if (input.checked) {
        formData = input.value;
      }
    });

    e.preventDefault();
    nextQuestion(formData);
  };

  return (
    <div className="row justify-content-center">
      {finalScore >= 0 && <QuizSummary />}
      {currentQuestionIndex < 0 && <QuizInitiator questions={questions} />}
      {currentQuestion && (
        <form onSubmit={calculateResult}>
          <Question />
          <button className="btn btn-primary" type="submit">
            Next Question
          </button>
        </form>
      )}
    </div>
  );
};

export default Quiz;
