import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./configuration/configSlice.ts";
import questionsReducer from "./questions/questionsSlice.tsx";
import gameInfoReducer from "./gameInfo/gameInfoSlice.ts";

export default configureStore({
  reducer: {
    config: configSlice,
    questions: questionsReducer,
    gameInfo: gameInfoReducer,
  },
});
