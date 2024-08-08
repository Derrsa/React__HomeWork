import "./Input.css";
import { useDispatch } from "react-redux";
import { setOptions } from "../../redux/configuration/configSlice.ts";

function Input({ name }) {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setOptions({ name, value }));
  };

  return (
    <>
      <div className="input-container">
        <label htmlFor="styled-input" className="input-label">
          Number of questions
        </label>
        <input
          onChange={handleChange}
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
