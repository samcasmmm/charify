import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type GlobalState = {
  sidebar: {
    iconState: 'message' | 'phone' | 'users' | 'setting';
  };
};

const initialState: GlobalState = {
  sidebar: {
    iconState: 'message',
  },
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    changeIconState: (
      state,
      action: PayloadAction<'message' | 'phone' | 'users' | 'setting'>
    ) => {
      state.sidebar.iconState = action.payload;
    },
  },
});

export const { changeIconState } = globalSlice.actions;

export default globalSlice.reducer;
