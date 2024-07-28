import { useContext } from "react";
import { SettingsContext } from "./Context.tsx";
import Input from "./inputs/input.tsx";
import Select from "./inputs/Select.tsx";
import { Button } from "./buttons/Button.tsx";

export function InitialScreen() {
  const { difficultyOptions, typeOptions, timeOptions, categoryOptions } =
    useContext(SettingsContext);
  return (
    <>
      <h1>Quizabro Codabro!</h1>
      <h2>Settings:</h2>
      <div className="main__wrapper">
        <Input />
        <Select category={"Categories"} options={categoryOptions} />
        <Select category={"Difficulty"} options={difficultyOptions} />
        <Select category={"Type"} options={typeOptions} />
        <Select category={"Time"} options={timeOptions} />
      </div>
      <div className="btns-group">
        <Button title="Start quiz" route={"/main/1Q"} />
        <Button title="See my stats" route={"/statistic"} />
      </div>
    </>
  );
}
