import { FormEvent } from "react";
import { useQuizContext } from "@context/quizContext";
import Question from "../Question/Question";
import { QuizInitiator } from "../QuizInitiator";
import { QuizSummary } from "../QuizSummary";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { QuizItem } from "../../types";

type QuizProps = {
  questions: QuizItem[];
};

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const {
    finalScore,
    currentQuestionIndex,
    currentQuestion,
    nextQuestion,
    questions: savedQuestions,
  } = useQuizContext();

  const calculateResult = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    nextQuestion(currentQuestion.selectedValue ?? "");
  };

  return (
    <div className="row justify-content-center">
      <div className="card quiz-card">
        <div className="card-body">
          {currentQuestionIndex < 0 && <QuizInitiator questions={questions} />}
          {currentQuestion && (
            <form onSubmit={calculateResult}>
              <div className="row mb-3 question">
                <div className="col-8 gt-2 text-start">
                  <div className="row align-items-center">
                    <div className="col-auto">
                      <b>Category: </b>
                      {currentQuestion.category}
                    </div>
                    <div className="col-auto">
                      <b>Difficulty:</b>
                      {currentQuestion.difficulty === "easy" && (
                        <Star color="green" size={22} />
                      )}
                      {currentQuestion.difficulty === "medium" && (
                        <StarHalf color="orange" size={22} />
                      )}
                      {currentQuestion.difficulty === "hard" && (
                        <StarFill color="red" size={22} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-4 text-end">
                  {currentQuestionIndex + 1} of {savedQuestions.length} Question
                </div>
              </div>
              <hr />
              <Question />
              <hr />
              <div className="row justify-content-center">
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">
                    Next Question
                  </button>
                </div>
              </div>
            </form>
          )}
          {finalScore >= 0 && <QuizSummary />}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
