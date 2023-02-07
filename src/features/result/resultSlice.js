import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: "",
  disabled: false
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.result = action.payload;
    },
    setDisabled: (state, action) => {
      state.disabled = action.payload;
    },
  },
}); 

export const { setResult, setDisabled } = resultSlice.actions;

export default resultSlice.reducer;

