import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import apiReducer from "./reducers/apiReducer";
import countReducer from "./reducers/countReducer";
import createSagaMiddleware from 'redux-saga'
import { reduxSagas } from "./sagas";

const rootReducer = combineReducers({
  count: countReducer,
  apiReducer: apiReducer,
});

const sagaMiddleWare = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(reduxSagas);

// export const store = createStore(rootReducer, applyMiddleware(thunk)); //for thunk

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;