import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { useQuizContext } from "../../context/quizContext";
import { FormSelect, FormSwitch, FormText } from "../Form";

const Question = () => {
  const { currentQuestion } = useQuizContext();
  return (
    <div>
      {!currentQuestion && <div>Question Not found </div>}
      {currentQuestion && (
        <div className="bg-white shadow-md rounded-md p-4">
          <h2
            className="text-xl font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
          />
          {currentQuestion.category}
          {currentQuestion.difficulty === "easy" && (
            <Star color="green" size={32} />
          )}
          {currentQuestion.difficulty === "medium" && (
            <StarHalf color="orange" size={32} />
          )}
          {currentQuestion.difficulty === "hard" && (
            <StarFill color="red" size={32} />
          )}

          {currentQuestion.type === "boolean" && <FormSwitch />}
          {currentQuestion.type === "text" && <FormText />}
          {currentQuestion.type === "multiple" && (
            <FormSelect options={currentQuestion.answers} />
          )}
        </div>
      )}
    </div>
  );
};
export default Question;
