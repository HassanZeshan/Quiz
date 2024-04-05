import { useQuizContext } from "../../context/quizContext";

const Question = () => {
  const { nextQuestion, currentQuestion } = useQuizContext();

  const calculateResult = () => {
    const isCorrect = true;
    nextQuestion(isCorrect);
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
            <button value="Next" onClick={() => calculateResult()} />
          </div>
        </>
      )}
    </div>
  );
};
export default Question;
