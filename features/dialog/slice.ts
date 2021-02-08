import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type DialogSliceState = {
  opened: boolean;
  title: string;
  message: string;
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState: {
    opened: false,
    title: '',
    message: '',
  } as DialogSliceState,
  reducers: {
    openDialog: {
      reducer(state, action: PayloadAction<Omit<DialogSliceState, 'opened'>>) {
        const { title, message } = action.payload;
        state.opened = true;
        state.title = title;
        state.message = message;
      },
      prepare(payload: Omit<DialogSliceState, 'opened'>) {
        return { payload };
      },
    },
    closeDialog(state) {
      state.opened = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
