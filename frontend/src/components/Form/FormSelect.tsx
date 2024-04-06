type SelectProps = {
  options: string[];
};
const FormSelect: React.FC<SelectProps> = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => {
        return (
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value={option}
              name={"formRadio"}
              key={index}
            />
            <label className="form-check-label"> {option} </label>
          </div>
        );
      })}
    </div>
  );
};

export default FormSelect;
