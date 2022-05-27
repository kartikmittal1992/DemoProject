import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import apiReducer from "./reducers/apiReducer";
import countReducer from "./reducers/countReducer";

const rootReducer = combineReducers({
  count: countReducer,
  apiReducer: apiReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;