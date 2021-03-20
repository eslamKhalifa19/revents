import { combineReducers } from "redux";
import eventReducer from "../../features/events/eventReducer";
import ModalReducer from "../common/modals/ModalReducer";
import authReducer from "../../features/auth/authReducer";
import asyncReducer from "../async/asyncReducer";
import profileReducer from "../../features/profiles/profileReducer";

const rootReducer = combineReducers({
  event: eventReducer,
  modals: ModalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer,
});

export default rootReducer;
