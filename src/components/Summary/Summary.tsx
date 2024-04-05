import { useQuiz } from "../../hooks/useQuiz";

const Summary = () => {
  const { restartQuiz } = useQuiz();
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
