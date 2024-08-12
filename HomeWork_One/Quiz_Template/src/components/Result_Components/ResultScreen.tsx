import style from "./ResultScreen.module.css";
import { Button } from "../buttons/Button.tsx";
import { Statistic } from "./Statistic.tsx";
import { FinishConfig } from "./FinishConfig.tsx";
import { useDispatch, useSelector } from "react-redux";
import { resetGameInfo } from "../../redux/gameInfo/gameInfoSlice.ts";
import {
  fetchQuestions,
  resetQuestions,
} from "../../redux/questions/questionsSlice.tsx";
import { selectOption } from "../../redux/configuration/configSlice.ts";

export function ResultScreen() {
  const dispatch = useDispatch();
  const config = useSelector(selectOption);

  const handleGetQuestions = () => {
    dispatch(resetGameInfo());
    dispatch(fetchQuestions(config));
  };
  function resetSettings() {
    dispatch(resetGameInfo());
    dispatch(resetQuestions());
  }

  return (
    <div className={style.result__wrapper}>
      <h2>Thank you for completed our Quiz! Here your results: </h2>
      <Statistic />
      <FinishConfig />
      <div>
        <Button click={handleGetQuestions} route={"/main/0"} title="Restart" />
        <Button click={resetSettings} route={"/"} title="Choose another quiz" />
      </div>
    </div>
  );
}
