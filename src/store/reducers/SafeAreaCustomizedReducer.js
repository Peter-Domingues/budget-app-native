import { createSlice } from "@reduxjs/toolkit";

const initialState = { refreshing: false };

const SafeAreaCustomizedSlice = createSlice({
  name: "SafeAreaCustomizedSlice",
  initialState,
  reducers: {
    IS_REFRESHING: (state, action) => {
      state.refreshing = action.payload;
    },
  },
});

export default SafeAreaCustomizedSlice;
