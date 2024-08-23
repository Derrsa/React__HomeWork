import { useContext } from "react";
import { SettingsContext } from "../Context.tsx";
import Input from "../inputs/input.tsx";
import Select from "../inputs/Select.tsx";
import { Button } from "../buttons/Button.tsx";
import { StartButton } from "../buttons/StartButton.tsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuestions } from "../../redux/questions/questionsSlice.tsx";
import {
  selectOption,
  setOptions,
} from "../../redux/configuration/configSlice.ts";
import { setInitTime } from "../../redux/gameInfo/gameInfoSlice.ts";
import { setStatistic } from "../../redux/statistic/statisticSlice.tsx";
import { animate, delay, motion } from "framer-motion";

export function InitialScreen() {
  const { difficultyOptions, typeOptions, timeOptions, categoryOptions } =
    useContext(SettingsContext);
  const dispatch = useDispatch();
  const config = useSelector(selectOption);

  function handleStatisticValue(array, value): void {
    array.forEach(([el, nameValue]) => {
      dispatch(setStatistic({ name: el, value, nameValue }));
    });
  }

  function handleChangeSelect(event) {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(setOptions({ name, value }));
  }

  const handleGetQuestions = async () => {
    await dispatch(fetchQuestions(config));
    dispatch(
      setInitTime({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
      }),
    );
    const valueMain = config.numberQuestions;
    const configArray = Object.entries(config);
    handleStatisticValue(configArray, valueMain);
  };

  return (
    <>
      <motion.h1
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 2, delay: 1 }}
      >
        Quizabro Codabro!
      </motion.h1>
      <h2>Settings:</h2>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 2, delay: 1 }}
        className="main__wrapper"
      >
        <Input
          name={"numberQuestions"}
          handleChangeSelect={handleChangeSelect}
        />
        <Select
          handleChangeSelect={handleChangeSelect}
          category={"Categories"}
          options={categoryOptions}
          name={"category"}
        />
        <Select
          handleChangeSelect={handleChangeSelect}
          name={"difficulty"}
          category={"Difficulty"}
          options={difficultyOptions}
        />
        <Select
          handleChangeSelect={handleChangeSelect}
          name={"type"}
          category={"Type"}
          options={typeOptions}
        />
        <Select
          handleChangeSelect={handleChangeSelect}
          name={"time"}
          category={"Time"}
          options={timeOptions}
        />
      </motion.div>
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
