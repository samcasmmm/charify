import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ChatsState = {
  isOpen: boolean;
};

type ToggleChatsPayload = { bool: boolean };

const initialState: ChatsState = {
  isOpen: false,
};

const toggleChatsFn = (state: ChatsState) => {
  if (state.isOpen) {
    state.isOpen = !state.isOpen;
  }
};

const toggleChatByUserFn = (
  state: ChatsState,
  action: PayloadAction<ToggleChatsPayload>,
) => {
  if (state.isOpen) {
    state.isOpen = action.payload.bool;
  }
};

const ChatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    toggleChatSection: toggleChatsFn,
    toggleChatByUser: toggleChatByUserFn,
  },
});

export const { toggleChatSection, toggleChatByUser } = ChatsSlice.actions;

export default ChatsSlice.reducer;
