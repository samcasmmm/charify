import { combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';
import counterReducer from './features/Counter.slice';
import globalReducer from './features/global.slice';

export const rootReducer = combineReducers({
  globalState: globalReducer,
  counter: counterReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});
