import { combineReducers } from "redux";
import RefreshSlice from "./RefreshReducer";

const rootReducer = combineReducers({
  refreshReducers: RefreshSlice.reducer,
});

export default rootReducer;
