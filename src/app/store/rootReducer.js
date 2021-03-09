import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";

const rootReducer = combineReducers({
  event: eventReducer,
});

export default rootReducer;
