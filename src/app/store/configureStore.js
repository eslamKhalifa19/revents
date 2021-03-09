import { createStore } from "redux";
import testReducer from "../../features/sandBox/testReducer";
export function configureStore() {
  return createStore(testReducer);
}
