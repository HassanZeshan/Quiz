import { useQuizContext } from "@context/quizContext";

type SelectProps = {
  options: string[];
};
const FormSelect: React.FC<SelectProps> = ({ options }) => {
  const { currentQuestion, currentQuestionIndex } = useQuizContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    currentQuestion.selectedValue = e.target.value;
  };
  return (
    <>
      {options.map((option, index) => {
        return (
          <div
            className="form-check text-left"
            key={`${currentQuestionIndex}-${index}`}
          >
            <input
              className="form-check-input"
              type="radio"
              value={option}
              name={`questionOptions${currentQuestionIndex}`}
              id={option}
              onChange={handleChange}
            />
            <label
              className="form-check-label"
              htmlFor={option}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          </div>
        );
      })}
    </>
  );
};

export default FormSelect;
