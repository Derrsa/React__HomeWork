import style from "./QuestionForm.module.css";

export function Question({ keyName, data, id }) {
  return (
    <div key={keyName} className={style.question__answer__block}>
      <input type="radio" datasrc={data} name={id} />
      <label htmlFor={id}>{keyName}</label>
    </div>
  );
}
