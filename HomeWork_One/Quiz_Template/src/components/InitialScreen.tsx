import { useContext } from "react";
import { SettingsContext } from "./Context.tsx";
import Input from "./inputs/input.tsx";
import Select from "./inputs/Select.tsx";
import { Button } from "./buttons/Button.tsx";
import { StartButton } from "./buttons/StartButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../redux/questions/questionsSlice.tsx";
import { selectOption } from "../redux/configuration/configSlice.ts";
import { setInitTime } from "../redux/gameInfo/gameInfoSlice.ts";
import { Link } from "react-router-dom";

export function InitialScreen() {
  const { difficultyOptions, typeOptions, timeOptions, categoryOptions } =
    useContext(SettingsContext);
  const dispatch = useDispatch();
  const config = useSelector(selectOption);

  const handleGetQuestions = async () => {
    await dispatch(fetchQuestions(config));
    dispatch(
      setInitTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      }),
    );
  };

  return (
    <>
      <h1>Quizabro Codabro!</h1>
      <h2>Settings:</h2>
      <div className="main__wrapper">
        <Input name={"numberQuestions"} />
        <Select
          category={"Categories"}
          options={categoryOptions}
          name={"category"}
        />
        <Select
          name={"difficulty"}
          category={"Difficulty"}
          options={difficultyOptions}
        />
        <Select name={"type"} category={"Type"} options={typeOptions} />
        <Select name={"time"} category={"Time"} options={timeOptions} />
      </div>
      <div className="btns-group">
        <StartButton
          title="Start quiz"
          route="/main/0"
          handleClick={handleGetQuestions}
        />

        <Button title="See my stats" route={"/statistic"} />
      </div>
    </>
  );
}
