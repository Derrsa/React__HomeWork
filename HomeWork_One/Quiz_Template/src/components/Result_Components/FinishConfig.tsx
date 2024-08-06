import style from "./FinishConfig.module.css";
import { useSelector } from "react-redux";
import { selectOption } from "../../redux/configuration/configSlice.ts";

export function FinishConfig() {
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
