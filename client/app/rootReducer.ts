import { combineReducers } from '@reduxjs/toolkit';
import { useApi } from './useApi';
import counterReducer from './resources/Counter.slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  [useApi.reducerPath]: useApi.reducer,
});
