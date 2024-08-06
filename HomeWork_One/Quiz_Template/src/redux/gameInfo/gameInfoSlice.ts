import { createSlice } from "@reduxjs/toolkit";

export const gameInfoSlice = createSlice({
  name: "gameInfo",
  initialState: {
    allQuestions: 0,
    correctAnswers: 0,
    time: "0 minutes",
  },
  reducers: {
    setOptions: (state, payload) => {},
  },
});

export const selectGameInfo = (state) => state.gameInfo;
export default gameInfoSlice.reducer;
