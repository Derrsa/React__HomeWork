import style from "./FinishConfig.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectOption } from "../../redux/configuration/configSlice.ts";
import {
  selectGameInfo,
  setFinishTime,
} from "../../redux/gameInfo/gameInfoSlice.ts";

export function FinishConfig() {
  const dispatch = useDispatch();
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
    return `Minute: ${minutes}: Seconds: ${seconds}`;
  }

  function categoryTransformer(code) {
    switch (code) {
      case "27":
        return "Animals";
      case "21":
        return "Sports";
      case "16":
        return "Games";
      default:
        return "Animals";
    }
  }
  const config = useSelector(selectOption);

  return (
    <div>
      <h3>Your initial configuration:</h3>
      <div className={style.config__content}>
        <span>Category: {categoryTransformer(config.category)}</span>
        <span>Difficult: {config.difficulty}</span>
        <span>Type: {config.type}</span>
        <span>Time: {config.time}</span>
      </div>
    </div>
  );
}
