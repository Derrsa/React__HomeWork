import style from "./QuestionForm.module.css";
import { Button } from "../buttons/Button.tsx";
import { Timer } from "./Timer.tsx";
import { useParams } from "react-router-dom";
import { Modal } from "../Modal/Modal.tsx";
import { useState } from "react";
import { Answer } from "./Answer.tsx";
import { useDispatch, useSelector } from "react-redux";
import { selectQuestions } from "../../redux/questions/questionsSlice.tsx";
import { increaseCorrect } from "../../redux/gameInfo/gameInfoSlice.ts";
import { setStatistic } from "../../redux/statistic/statisticSlice.tsx";

export function QuestionForm() {
  const dispatch = useDispatch();
  const routerParam = Number(useParams<{ questionId: string }>().questionId);
  const questions = useSelector(selectQuestions).questions;

  const currentData = questions.find((el, index) => {
    return index === routerParam;
  });
  const allQuestions = [
    ...currentData.incorrect_answers,
    currentData.correct_answer,
  ];
  const lastQuestion = questions.length - 1;

  const [closeModal, setCloseModal] = useState(false);
  const [isTimerOut, setIsTimerOut] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState();
  function setModal() {
    setCloseModal(!closeModal);
  }
  function setTimer() {
    setIsTimerOut(!isTimerOut);
  }

  function handleCurrentAnswer(value) {
    setCurrentAnswer(value);
  }
  function checkCorrectAnswer() {
    if (currentAnswer === currentData.correct_answer) {
      dispatch(increaseCorrect());
      const name = "correctAnswers";
      const value = 1;
      dispatch(setStatistic({ name, value }));
    }
  }

  function checkLastQuestion(numberOfQuestion, lastQuestion) {
    return Number(numberOfQuestion) === lastQuestion;
  }

  return (
    <form className={style.question__wrapper}>
      <Modal condition={closeModal} setCondition={setModal} />
      <Timer setIsEnd={setTimer} timeInterval={"1m"} />
      <h2 className={style.question__title}>{`${currentData.question}`}</h2>
      <div className={style.question__answersList}>
        {allQuestions.map((el, index) => {
          return (
            <Answer
              key={el}
              id={el + index}
              handleCurrentAnswer={handleCurrentAnswer}
              question={currentData.question}
              variant={el}
            />
          );
        })}
      </div>
      <div className={style.question__buttons}>
        <Button click={setModal} title="End Quizabro" />
        <Button
          click={checkCorrectAnswer}
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
