import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { combineReducers } from "redux";
import sagas from "../store/sagas";

const sagaMiddleware = createSagaMiddleWare();

export const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(sagas);
