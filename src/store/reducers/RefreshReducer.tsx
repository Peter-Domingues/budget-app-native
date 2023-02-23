import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RefreshSliceProps } from "../reducersInterface/SafeAreaCustomized.types";

const initialState: RefreshSliceProps = {
  refreshing: false,
  refreshAll: false,
};

const RefreshSlice = createSlice({
  name: "RefreshSlice",
  initialState,
  reducers: {
    IS_REFRESHING: (
      state: RefreshSliceProps,
      action: PayloadAction<boolean>
    ) => {
      state.refreshing = action.payload;
    },
    REFRESH_ALL: (state: RefreshSliceProps, action: PayloadAction<boolean>) => {
      state.refreshAll = action.payload;
    },
  },
});

export default RefreshSlice;
