import countReducer from "./reducers/countReducer";
import { configureStore } from "@reduxjs/toolkit";
import toolkitApiReducer from "./reducers/apiReducer";
import logger from "redux-logger";
// const rootReducer = combineReducers({
//   count: countReducer,
//   apiReducer: apiReducer,
// });

// const sagaMiddleWare = createSagaMiddleware()
// export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
// sagaMiddleWare.run(reduxSagas);

// export const store = createStore(rootReducer, applyMiddleware(thunk)); //for thunk

export const store = configureStore({
  reducer: {
    apiReducer: toolkitApiReducer,
    countReducer: countReducer
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;