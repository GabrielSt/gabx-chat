import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import handleNewMessage from "./sagas";
import setupSocket from "./sockets";
import username from "./utils/name";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(...middlewares)(createStore)(
  rootReducer,
  devTools
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

export default store;
