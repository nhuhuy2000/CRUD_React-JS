import React from "react";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer/rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";
//Saga
import Saga from "./saga/root_saga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
export type RootState = ReturnType<typeof reducer>;
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);
sagaMiddleware.run(Saga);
export default store;
