import { useSelector } from "react-redux";
import { selectStatistic } from "../../redux/statistic/statisticSlice.tsx";
import { Button } from "../buttons/Button.tsx";
import style from "./StatisticScreen.module.css";

export function StatisticScreen() {
  const statistic = useSelector(selectStatistic);
  return (
    <div>
      <h2 className={style.statistic__title}>Your Statistic!</h2>
      <div className={style.statistic__wrapper}>
        <div className={style.statistic__item}>
          <h3>Answers statistic:</h3>
          You answered correct {statistic.correctAnswers} out of{" "}
          {statistic.numberQuestions} questions correctly all the time
        </div>
        <div className={style.statistic__item}>
          <h3>Category statistic:</h3>
          <div>Animals: {statistic.category.animals} questions</div>
          <div>Sport: {statistic.category.sport} questions</div>
          <div>Games: {statistic.category.games} questions</div>
        </div>
        <div className={style.statistic__item}>
          <h3>Difficulty statistic:</h3>
          <div>Easy: {statistic.difficulty.easy} questions</div>
          <div>Medium: {statistic.difficulty.medium} questions</div>
          <div>Hard: {statistic.difficulty.hard} questions</div>
        </div>
        <div className={style.statistic__item}>
          <h3>Type statistic:</h3>
          <div>Multiple: {statistic.type.multiple} questions</div>
          <div>Boolean: {statistic.type.boolean} questions</div>
        </div>
      </div>
      <Button title={"Return to start screen"} route={"/"} />
    </div>
  );
}
