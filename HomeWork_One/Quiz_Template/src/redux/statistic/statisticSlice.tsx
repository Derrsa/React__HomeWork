import { createSlice } from "@reduxjs/toolkit";
interface IStatistic {
  numberQuestions: number;
  correctAnswers: number;
  category: ICategory;
  difficulty: IDifficulty;
  type: IType;
}
interface ICategory {
  animals: number;
  sport: number;
  games: number;
}
interface IType {
  boolean: number;
  multiple: number;
}

interface IDifficulty {
  easy: number;
  medium: number;
  hard: number;
}
const initialState: IStatistic = {
  numberQuestions: 0,
  correctAnswers: 0,
  category: {
    animals: 0,
    sport: 0,
    games: 0,
  },
  difficulty: {
    easy: 0,
    medium: 0,
    hard: 0,
  },
  type: {
    boolean: 0,
    multiple: 0,
  },
};

export const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {
    setStatistic: (state, action) => {
      const { name, value, nameValue } = action.payload;
      if (name in state) {
        switch (name) {
          case "category":
            if (nameValue === 27) {
              state[name]["animals"] += +value;
            } else if (nameValue === 21) {
              state[name]["sport"] += value;
            }
            if (nameValue === 15) {
              state[name]["games"] += value;
            }
            break;
          case "difficulty":
            if (nameValue === "easy") {
              state[name][nameValue] += value;
            } else if (nameValue === "medium") {
              state[name][nameValue] += value;
            } else if (nameValue === "hard") {
              state[name][nameValue] += value;
            }
            break;
          case "type":
            if (nameValue === "boolean") {
              state[name][nameValue] += value;
            } else if (nameValue === "multiple") {
              state[name][nameValue] += value;
            }
            break;
          default:
            state[name] += value;
        }
      }
    },
    resetStatistic: (state) => {},
  },
});

export const { setStatistic } = statisticSlice.actions;
export const selectStatistic = (state: { statistic: IStatistic }) =>
  state.statistic;

export default statisticSlice.reducer;
