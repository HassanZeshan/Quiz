import { useQuizContext } from "@context/quizContext";
import { FormSelect, FormSwitch, FormText } from "../Form";

const Question = () => {
  const { currentQuestion, currentQuestionIndex } = useQuizContext();
  return (
    <div className="row justify-content-center">
      {!currentQuestion && <div>Question Not found </div>}
      {currentQuestion && (
        <>
          <h3
            className="text-xl mb-4"
            dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
          />
          <div className="col-auto mb-4">
            {currentQuestion.type === "boolean" && (
              <FormSwitch key={`formSwitch${currentQuestionIndex}`} />
            )}
            {currentQuestion.type === "text" && (
              <FormText key={`formText${currentQuestionIndex}`} />
            )}
            {currentQuestion.type === "multiple" && (
              <FormSelect
                key={`formSelect${currentQuestionIndex}`}
                options={currentQuestion.answers}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
