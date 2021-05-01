import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContentsState {
  isOpenPalette: boolean;
  isOpenAlignPanel: boolean;
  isOpenHeadingPanel: boolean;
}

const initialState: ContentsState = {
  isOpenPalette: false,
  isOpenAlignPanel: false,
  isOpenHeadingPanel: false,
};

const contentsSlice = createSlice({
  name: 'contents',
  initialState,
  reducers: {
    setIsOpenPalette(state, { payload }: PayloadAction<boolean>) {
      state.isOpenPalette = payload;
    },
    setIsOpenAlignPanel(state, { payload }: PayloadAction<boolean>) {
      state.isOpenAlignPanel = payload;
    },
    setIsOpenHeadingPanel(state, { payload }: PayloadAction<boolean>) {
      state.isOpenHeadingPanel = payload;
    },
  },
});
export const { reducer, actions } = contentsSlice;
export const {
  setIsOpenPalette,
  setIsOpenAlignPanel,
  setIsOpenHeadingPanel,
} = contentsSlice.actions;
