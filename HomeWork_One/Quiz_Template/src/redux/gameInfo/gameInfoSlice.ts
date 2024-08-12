import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  correctAnswers: 0,
  time: "0 minutes",
  initTime: {},
  endTime: null,
};

export const gameInfoSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {
    increaseCorrect: (state) => {
      state.correctAnswers += 1;
    },
    resetGameInfo: (state) => {
      state.correctAnswers = 0;
      state.time = "0 minutes";
    },
    setInitTime: (state, payload) => {
      state.initTime = payload;
    },
    setFinishTime: (state, payload) => {
      state.time = payload;
    },
  },
});

export const {
  increaseAllQuestions,
  increaseCorrect,
  setInitTime,
  setFinishTime,
  resetGameInfo,
} = gameInfoSlice.actions;
export const selectGameInfo = (state) => state.gameInfo;
export default gameInfoSlice.reducer;
