import style from "./Statistic.module.css";

import { useContext } from "react";
import { SettingsContext } from "../Context.tsx";
import { useSelector } from "react-redux";
import { selectQuestions } from "../../redux/questions/questionsSlice.tsx";
import { selectGameInfo } from "../../redux/gameInfo/gameInfoSlice.ts";

export function Statistic() {
  const numberOfQuestions = useSelector(selectQuestions).questions.length;
  const gameInfoOptions = useSelector(selectGameInfo);
  const { statisticOption } = useContext(SettingsContext);
  const gameInfo = useSelector(selectGameInfo).initTime.payload;

  function checkTime() {
    const initTimeInSec =
      +gameInfo.hour * 3600 + +gameInfo.minute * 60 + +gameInfo.second;
    const currentTimeInSec =
      Number(new Date().getHours() * 3600) +
      Number(new Date().getMinutes() * 60) +
      Number(new Date().getSeconds());
    const seconds = (currentTimeInSec - initTimeInSec) % 60;
    const minutes = Math.floor((currentTimeInSec - initTimeInSec) / 60);
    return `${minutes} minute ${seconds} seconds`;
  }
  return (
    <div className={style.statistic__wrapper}>
      <ul>
        Your statistic:
        <li>
          -Correct answer: {gameInfoOptions.correctAnswers} out of{" "}
          {numberOfQuestions}
        </li>
        <li>-It took you {checkTime()} </li>
      </ul>
    </div>
  );
}
