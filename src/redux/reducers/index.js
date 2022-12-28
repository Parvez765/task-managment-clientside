import { combineReducers } from "redux";
import { taskReducer } from "./taskReducers";

const reducers = combineReducers({
  alltasks: taskReducer,
  
});

export default reducers;
