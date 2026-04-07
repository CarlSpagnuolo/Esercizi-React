import { createSlice } from "@reduxjs/toolkit";

// tipo dello stato
type CounterState = {
  count: number;
};

// stato iniziale
const initialState: CounterState = {
  count: 0,
};
// creazione dello slice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
// esporto azioni
export const { increment, decrement, reset } = counterSlice.actions;
// esporto reducer
export default counterSlice.reducer;
