import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer.ts';
import { useApi } from './useApi.ts';
const Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(useApi.middleware),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
