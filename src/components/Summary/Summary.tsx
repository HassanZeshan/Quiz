import { useQuizContext } from "../../context/quizContext";

const Summary = () => {
  const { restartQuiz, finalScore } = useQuizContext();
  return (
    <div>
      summary page and restart quiz
      <button
        value="Restart"
        onClick={() => {
          restartQuiz();
        }}
      />
    </div>
  );
};

export default Summary;
