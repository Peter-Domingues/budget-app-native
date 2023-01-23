import { createSlice } from "@reduxjs/toolkit";

const initialState = { show: false };

const AnimatedCardSlice = createSlice({
  name: "AnimatedCardSlice",
  initialState,
  reducers: {
    OPEN_MONTH: (state, action) => {
      state.show = action.payload;
    },
  },
});

export default AnimatedCardSlice;
