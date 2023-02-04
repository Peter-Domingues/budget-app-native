import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SafeAreaCustomizedSliceProps } from "../reducersInterface/SafeAreaCustomized.types";

const initialState: SafeAreaCustomizedSliceProps = { refreshing: false };

const SafeAreaCustomizedSlice = createSlice({
  name: "SafeAreaCustomizedSlice",
  initialState,
  reducers: {
    IS_REFRESHING: (
      state: SafeAreaCustomizedSliceProps,
      action: PayloadAction<boolean>
    ) => {
      state.refreshing = action.payload;
    },
  },
});

export default SafeAreaCustomizedSlice;
