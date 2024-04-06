// import { useQuizContext } from "../../context/quizContext";

const FormSingle = () => {
  // const { currentQuestion } = useQuizContext();
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="questionRadio"
          value="true"
          // onChange={(e) => {
          //   currentQuestion.value = e.target.value;
          // }}
        />
        <label className="form-check-label">True</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="questionRadio"
          value="false"
          // onChange={(e) => {
          //   currentQuestion.value = e.target.value;
          // }}
        />
        <label className="form-check-label">False</label>
      </div>
    </div>
  );
};

export default FormSingle;
