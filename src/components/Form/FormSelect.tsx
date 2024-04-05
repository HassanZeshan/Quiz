type SelectProps = {
  options: string[];
};
const FormSelect: React.FC<SelectProps> = ({ options }) => {
  return (
    <div>
      {options.map((option) => {
        return (
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={option}
              id="flexCheckDefault"
            />
            <label className="form-check-label"> {option} </label>
          </div>
        );
      })}
    </div>
  );
};

export default FormSelect;
