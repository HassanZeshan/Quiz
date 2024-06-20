import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { useQuizContext } from "@context/quizContext";

const QuestionHeader = () => {
  const {
    currentQuestionIndex,
    currentQuestion,
    questions: savedQuestions,
  } = useQuizContext();
  return (
    <div className="row mb-3 question">
      <div className="col-md-8 gt-2 text-start">
        <div className="row align-items-center">
          <div className="col-md-6 text-sm-center">
            <b>Category: </b>
            {currentQuestion.category}
          </div>
          <div className="col-md-6 text-sm-center mt-sm-2 mt-md-0">
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
      <div className="col-md-4 mt-sm-2 mt-md-0 text-md-end">
        {currentQuestionIndex + 1} of {savedQuestions.length} Question
      </div>
    </div>
  );
};
export default QuestionHeader;
