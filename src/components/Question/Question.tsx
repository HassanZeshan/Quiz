import { useQuizContext } from "../../context/quizContext";
import { FormSelect, FormSwitch, FormText } from "../Form";

const Question = () => {
  const { currentQuestion } = useQuizContext();
  console.log(currentQuestion, "current Question");
  return (
    <div>
      {!currentQuestion && <div>Question Not found </div>}
      {currentQuestion && (
        <div className="bg-white shadow-md rounded-md p-4">
          <h2
            className="text-xl font-bold mb-2"
            dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
          />

          {currentQuestion.type === "boolean" && <FormSwitch />}
          {currentQuestion.type === "text" && <FormText />}
          {currentQuestion.type === "multiple" && (
            <FormSelect options={currentQuestion?.answers} />
          )}
        </div>
      )}
    </div>
  );
};
export default Question;
