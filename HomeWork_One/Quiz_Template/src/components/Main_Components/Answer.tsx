import style from "./Answer.module.css";
export function Answer({ handleCurrentAnswer, question, variant }) {
  return (
    <div className={style.answer__wrapper} key={variant}>
      <input
        onChange={(event) => handleCurrentAnswer(event.currentTarget.value)}
        type="radio"
        value={variant}
        id={variant}
        name={question}
      />
      <label htmlFor={question}>{variant}</label>
    </div>
  );
}
