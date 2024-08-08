import "./Select.css";
import { useDispatch } from "react-redux";
import { setOptions } from "../../redux/configuration/configSlice.ts";

const Select = ({ category, options, name }) => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setOptions({ name, value }));
  };

  return (
    <div>
      <label htmlFor="select" className="select-label">
        {category}
      </label>
      <select name={name} className="select" onChange={handleChange}>
        {options.map((option) => (
          <option
            key={option.id}
            value={name === "category" ? option.code : option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
