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
      if (name === "numberQuestions") {
        state.confOptions[name] = Number(value);
        return;
      } else if (name === "category") {
        state.confOptions[name] = Number(value);
        return;
      }
      state.confOptions[name] = value;
    },
  },
});

export const { setOptions } = configSlice.actions;
export const selectOption = (state) => state.config.confOptions;
export default configSlice.reducer;
