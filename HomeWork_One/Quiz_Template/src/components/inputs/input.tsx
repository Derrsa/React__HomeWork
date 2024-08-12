import "./Input.css";

function Input({ name, handleChangeSelect }) {
  return (
    <>
      <div className="input-container">
        <label htmlFor="styled-input" className="input-label">
          Number of questions
        </label>
        <input
          onChange={handleChangeSelect}
          type="number"
          max="15"
          min="5"
          id="styled-input"
          placeholder="Enter number from 5 to 15"
          required
          name={name}
        />
        <span className="input-underline"></span>
      </div>
    </>
  );
}

export default Input;
