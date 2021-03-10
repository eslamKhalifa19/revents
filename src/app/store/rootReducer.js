import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";
import ModalReducer from "../common/modals/ModalReducer";
import authReducer from "../../features/auth/authReducer";
const rootReducer = combineReducers({
  event: eventReducer,
  modals: ModalReducer,
  auth: authReducer,
});

export default rootReducer;
