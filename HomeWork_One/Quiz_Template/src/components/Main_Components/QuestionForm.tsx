import style from "./QuestionForm.module.css";
import { Button } from "../buttons/Button.tsx";
import { Timer } from "./Timer.tsx";
import { useParams } from "react-router-dom";
import { questionsData } from "../../mockData/questionsData.ts";
import { Modal } from "../Modal/Modal.tsx";
import { useState } from "react";
import { Question } from "./Question.tsx";

export function QuestionForm() {
  const routerParam = useParams<{ questionId: string }>();
  const currentData = questionsData.find((el) => {
    return el?.id === routerParam?.questionId;
  });
  const lastQuestion = questionsData.length;
  const [closeModal, setCloseModal] = useState(false);
  const [isTimerOut, setIsTimerOut] = useState(false);
  function setModal() {
    setCloseModal(!closeModal);
  }
  function setTimer() {
    setIsTimerOut(!isTimerOut);
  }
  function checkLastQuestion(numberOfQuestion, lastQuestion) {
    return numberOfQuestion === lastQuestion;
  }
  return (
    <form className={style.question__wrapper}>
      <Modal condition={closeModal} setCondition={setModal} />
      <Timer setIsEnd={setTimer} timeInterval={"1m"} />
      <h2 className={style.question__title}>{`${currentData.title}`}</h2>
      <div className={style.question__answersList}>
        {currentData.variant.map((el) => {
          return (
            <Question
              keyName={el}
              id={currentData.id}
              data={el === currentData.answer ? 1 : 0}
            />
          );
        })}
      </div>
      <div className={style.question__buttons}>
        <Button click={setModal} title="End Quizabro" />
        <Button
          title={"Next question"}
          route={
            checkLastQuestion(lastQuestion, parseInt(currentData.id))
              ? "/result"
              : `../${parseInt(currentData.id) + 1}Q`
          }
        />
      </div>
    </form>
  );
}
