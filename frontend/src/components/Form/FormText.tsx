import { useQuizContext } from "@context/quizContext";
const FormText = () => {
  const { currentQuestion } = useQuizContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentQuestion.selectedValue = e.target.value;
  };
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        name="formText"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormText;
