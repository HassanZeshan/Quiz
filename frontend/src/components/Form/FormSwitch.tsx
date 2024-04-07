import { useQuizContext } from "../../context/quizContext";

const FormSingle = () => {
  const { currentQuestion } = useQuizContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentQuestion.selectedValue = e.target.value;
  };
  return (
    <>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="questionRadio"
          value="true"
          onChange={handleChange}
        />
        <label className="form-check-label">True</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="questionRadio"
          value="false"
          onChange={handleChange}
        />
        <label className="form-check-label">False</label>
      </div>
    </>
  );
};

export default FormSingle;
