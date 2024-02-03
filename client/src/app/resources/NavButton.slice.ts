import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NavButtonsState = {
  activeButton: number;
};

type NavButtonsPayload = { index: number };

const initialState: NavButtonsState = {
  activeButton: 0,
};

const changeActiveFn = (
  state: NavButtonsState,
  action: PayloadAction<NavButtonsPayload>,
) => {
  state.activeButton = action.payload.index;
};

const NavButtons = createSlice({
  name: "navbuttons",
  initialState,
  reducers: {
    setActiveButton: changeActiveFn,
  },
});

export const { setActiveButton } = NavButtons.actions;
export default NavButtons.reducer;
