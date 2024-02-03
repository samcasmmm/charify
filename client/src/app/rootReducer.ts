import { combineReducers } from "@reduxjs/toolkit";
import { useApi } from "./useApi";
import counterReducer from "./resources/Counter.slice";
import NavButtonReducer from "./resources/NavButton.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  navButtons: NavButtonReducer,
  [useApi.reducerPath]: useApi.reducer,
});
