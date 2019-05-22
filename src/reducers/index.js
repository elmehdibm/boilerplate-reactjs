import greetingReducer from "./greeting/greetingReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    greetingReducer
});

export default allReducers;
