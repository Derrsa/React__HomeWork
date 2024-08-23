import "./Select.css";

const Select = ({ category, options, name, handleChangeSelect }) => {
  return (
    <div>
      <label htmlFor="select" className="select-label">
        {category}
      </label>
      <select name={name} className="select" onChange={handleChangeSelect}>
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
