import { combineReducers } from "redux";
import SafeAreaCustomizedSlice from "./SafeAreaCustomizedReducer";

const rootReducer = combineReducers({
  safeAreaCustomizedReducers: SafeAreaCustomizedSlice.reducer,
});

export default rootReducer;
