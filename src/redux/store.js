import { applyMiddleware, createStore } from "redux";
import { mobileReducer } from "./reducers/mobiles";
// import { contactsReducer } from "./reducers/contacts";
import createSagaMiddleWare from "redux-saga";
import { watchUser } from "./sagas/users.saga";

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  mobileReducer,
  applyMiddleware(sagaMiddleWare)
);
sagaMiddleWare.run(watchUser);
