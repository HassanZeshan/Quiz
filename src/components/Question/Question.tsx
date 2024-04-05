import { useQuizContext } from "../../context/quizContext";
import { FormSelect, FormSwitch, FormText } from "../Form";

const Question = () => {
  const { nextQuestion, currentQuestion } = useQuizContext();

  const calculateResult = () => {
    const isCorrect = true;
    nextQuestion(isCorrect);
  };

  const getByFormType = (type: string) => {
    switch (type) {
      case "boolean":
        return <FormSwitch />;
      case "single":
        return <FormSelect />;
      case "multiple":
        return <FormText />;
    }
  };
  
  return (
    <div>
      {!currentQuestion && <div>Question Not found </div>}
      {currentQuestion && (
        <>
          <div className="bg-white shadow-md rounded-md p-4">
            <h2
              className="text-xl font-bold mb-2"
              dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
            />

            {getByFormType(currentQuestion.type)}
            <button value="Next" onClick={() => calculateResult()} />
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
