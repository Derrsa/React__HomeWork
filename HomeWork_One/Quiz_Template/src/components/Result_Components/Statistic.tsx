import style from "./Statistic.module.css";

import { useContext } from "react";
import { SettingsContext } from "../Context.tsx";
import { useSelector } from "react-redux";
import { selectQuestions } from "../../redux/questions/questionsSlice.tsx";
import { selectGameInfo } from "../../redux/gameInfo/gameInfoSlice.ts";
import { useCheckTime } from "../hooks/useCheckTime.ts";

export function Statistic() {
  const numberOfQuestions = useSelector(selectQuestions).questions.length;
  const gameInfoOptions = useSelector(selectGameInfo);
  const { statisticOption } = useContext(SettingsContext);
  const gameInfo = useSelector(selectGameInfo).initTime.payload;

  return (
    <div className={style.statistic__wrapper}>
      <ul>
        Your statistic:
        <li>
          -Correct answer: {gameInfoOptions.correctAnswers} out of{" "}
          {numberOfQuestions}
        </li>
        <li>-It took you {useCheckTime(gameInfo)} </li>
      </ul>
    </div>
  );
}
