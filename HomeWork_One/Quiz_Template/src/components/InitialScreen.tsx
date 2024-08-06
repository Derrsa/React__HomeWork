import { useContext } from "react";
import { SettingsContext } from "./Context.tsx";
import Input from "./inputs/input.tsx";
import Select from "./inputs/Select.tsx";
import { Button } from "./buttons/Button.tsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchQuestions,
  selectQuestions,
} from "../redux/questions/questionsSlice.tsx";
import { selectOption } from "../redux/configuration/configSlice.ts";

export function InitialScreen() {
  const { difficultyOptions, typeOptions, timeOptions, categoryOptions } =
    useContext(SettingsContext);
  const dispatch = useDispatch();
  const config = useSelector(selectOption);
  const questions = useSelector(selectQuestions);

  const handleGetQuestions = () => {
    dispatch(
      fetchQuestions(
        `https://opentdb.com/api.php?amount=${config.numberQuestions}&category=${config.category}&difficulty=${config.difficulty}&type=${config.type}`,
      ),
    );
  };

  return (
    <>
      <button onClick={handleGetQuestions}>Get question</button>
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
        <Button
          onClick={handleGetQuestions}
          title="Start quiz"
          route="/main/0"
        />
        <Button title="See my stats" route={"/statistic"} />
      </div>
    </>
  );
}
