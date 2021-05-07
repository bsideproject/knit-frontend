import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ContentsState {
  isOpenPalette: boolean;
  isOpenBackPalette: boolean;
  isOpenAlignPanel: boolean;
  isOpenHeadingPanel: boolean;
  isOpenUrlPanel: boolean;
}

const initialState: ContentsState = {
  isOpenPalette: false,
  isOpenBackPalette: false,
  isOpenAlignPanel: false,
  isOpenHeadingPanel: false,
  isOpenUrlPanel: false,
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
    setIsOpenBackPalette(state, { payload }: PayloadAction<boolean>) {
      state.isOpenBackPalette = payload;
    },
    setIsOpenUrlPanel(state, { payload }: PayloadAction<boolean>) {
      state.isOpenUrlPanel = payload;
    },
  },
});
export const { reducer, actions } = contentsSlice;
export const {
  setIsOpenPalette,
  setIsOpenAlignPanel,
  setIsOpenHeadingPanel,
  setIsOpenBackPalette,
  setIsOpenUrlPanel,
} = contentsSlice.actions;
