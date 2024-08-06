import style from "./QuestionForm.module.css";
import { Button } from "../buttons/Button.tsx";
import { Timer } from "./Timer.tsx";
import { useParams } from "react-router-dom";
import { Modal } from "../Modal/Modal.tsx";
import { useState } from "react";
import { Answer } from "./Answer.tsx";
import { useSelector } from "react-redux";
import { selectQuestions } from "../../redux/questions/questionsSlice.tsx";

export function QuestionForm() {
  const routerParam = Number(useParams<{ questionId: string }>().questionId);
  const questions = useSelector(selectQuestions).questions;
  const currentData = questions.find((el, index) => {
    return index === routerParam;
  });
  const lastQuestion = questions.length - 1;
  const [closeModal, setCloseModal] = useState(false);
  const [isTimerOut, setIsTimerOut] = useState(false);
  function setModal() {
    setCloseModal(!closeModal);
  }
  function setTimer() {
    setIsTimerOut(!isTimerOut);
  }
  function checkLastQuestion(numberOfQuestion, lastQuestion) {
    console.log(numberOfQuestion === lastQuestion);
    return Number(numberOfQuestion) === lastQuestion;
  }

  return (
    <form className={style.question__wrapper}>
      <Modal condition={closeModal} setCondition={setModal} />
      <Timer setIsEnd={setTimer} timeInterval={"1m"} />
      <h2 className={style.question__title}>{`${currentData.question}`}</h2>
      <div className={style.question__answersList}>
        {currentData.incorrect_answers.map((el) => {
          return (
            <Answer
              question={currentData.question}
              answer={currentData.correct_answer}
              variant={el}
            />
          );
        })}
        <Answer
          question={currentData.question}
          answer={currentData.correct_answer}
          variant={currentData.correct_answer}
        />
      </div>
      <div className={style.question__buttons}>
        <Button click={setModal} title="End Quizabro" />
        <Button
          title={"Next question"}
          route={
            checkLastQuestion(lastQuestion, routerParam)
              ? "/result"
              : `../${routerParam + 1}`
          }
        />
      </div>
    </form>
  );
}
