import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";

const middlewares = [];

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware(...middlewares)(createStore)(
  rootReducer,
  devTools
);

export default store;
