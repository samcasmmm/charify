import { combineReducers } from "@reduxjs/toolkit";
import { useApi } from "./useApi";
import counterReducer from "./resources/Counter.slice";
import NavButtonReducer from "./resources/NavButton.slice";
import ChatsReducer from "./resources/Chats.slice";

export const rootReducer = combineReducers({
  counter: counterReducer,
  navButtons: NavButtonReducer,
  ChatSection: ChatsReducer,
  [useApi.reducerPath]: useApi.reducer,
});
