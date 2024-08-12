import style from "./Answer.module.css";
export function Answer({ handleCurrentAnswer, question, variant, id }) {
  return (
    <div className={style.answer__wrapper}>
      <input
        onChange={(event) => handleCurrentAnswer(event.currentTarget.value)}
        type="radio"
        value={variant}
        id={id}
        name={question}
      />
      <label htmlFor={id}>{variant}</label>
    </div>
  );
}
