import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../common/modals/modalReducer";

const rootReducer = combineReducers({
  event: eventReducer,
  modals: modalReducer,
});

export default rootReducer;
