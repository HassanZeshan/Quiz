import { useQuizContext } from "@context/quizContext";

type SelectProps = {
  options: string[];
};
const FormSelect: React.FC<SelectProps> = ({ options }) => {
  const { currentQuestion } = useQuizContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentQuestion.selectedValue = e.target.value;
  };
  return (
    <>
      {options.map((option, index) => {
        return (
          <div className="form-check text-left">
            <input
              className="form-check-input"
              type="radio"
              value={option}
              name={"formRadio"}
              key={index}
              id={option}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor={option}>
              
              {option}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default FormSelect;
