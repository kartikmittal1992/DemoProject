import { combineReducers, createStore } from "redux";
import countReducer from "./reducers/countReducer";

const rootReducer = combineReducers({
  count: countReducer
});

export const configureStore = () => {
  return createStore(rootReducer);
}

export type RootState = ReturnType<typeof rootReducer>