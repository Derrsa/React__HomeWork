import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async (config) => {
    const res = await axios.get("https://opentdb.com/api.php", {
      params: {
        amount: config.numberQuestions,
        category: config.category,
        difficulty: config.difficulty,
        type: config.type,
      },
    });
    return res.data.results;
  },
);

const initialState = {
  questions: [],
  status: "idle",
  error: null,
};
export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    resetQuestions(state) {
      state.questions = [undefined];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
    builder.addCase(fetchQuestions.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const { setQuestions, setStatus, resetQuestions, setError } =
  questionsSlice.actions;
export const selectQuestions = (state) => state.questions;
export default questionsSlice.reducer;
