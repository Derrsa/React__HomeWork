import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "config",
  initialState: {
    confOptions: {
      numberQuestions: 5,
      difficulty: "easy",
      type: "multiple",
      category: 27,
      time: "1min",
    },
  },
  reducers: {
    setOptions: (state, action) => {
      const { name, value } = action.payload;
      state.confOptions[name] = value;
    },
  },
});

export const { setOptions } = configSlice.actions;
export const selectOption = (state) => state.config.confOptions;
export default configSlice.reducer;
