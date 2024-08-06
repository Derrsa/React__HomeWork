import style from "./Answer.module.css";
export function Answer({ question, answer, variant }) {
  return (
    <div className={style.answer__wrapper} key={variant}>
      <input type="radio" value={variant} id={variant} name={question} />
      <label htmlFor={question}>{variant}</label>
    </div>
  );
}
