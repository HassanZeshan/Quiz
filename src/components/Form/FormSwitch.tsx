const FormSingle = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="questionRadio"
          value="true"
        />
        <label className="form-check-label">True</label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="questionRadio"
          value="false"
        />
        <label className="form-check-label">False</label>
      </div>
    </div>
  );
};

export default FormSingle;
