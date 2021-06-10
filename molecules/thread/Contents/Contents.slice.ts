import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MemoFocusInfo } from '../Block';

interface Offset {
  x: number;
  y: number;
}
interface ContentsState {
  isOpenPalette: boolean;
  isOpenBackPalette: boolean;
  isOpenAlignPanel: boolean;
  isOpenHeadingPanel: boolean;
  isOpenUrlPanel: boolean;
  posTrashPanel: Offset | null;
  memoFocusInfo: MemoFocusInfo | null;
}

const initialState: ContentsState = {
  isOpenPalette: false,
  isOpenBackPalette: false,
  isOpenAlignPanel: false,
  isOpenHeadingPanel: false,
  isOpenUrlPanel: false,
  posTrashPanel: null,
  memoFocusInfo: null,
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
    setPosTrashPanel(state, { payload }: any) {
      state.posTrashPanel = payload;
    },
    setMemoFocusInfo(state, { payload }: any) {
      state.memoFocusInfo = payload;
    },

    // setPosTrashPanel(state, { payload }: PayloadAction<Offset | null>) {
    //   state.posTrashPanel = payload;
    // },
  },
});
export const { reducer, actions } = contentsSlice;
export const {
  setIsOpenPalette,
  setIsOpenAlignPanel,
  setIsOpenHeadingPanel,
  setIsOpenBackPalette,
  setIsOpenUrlPanel,
  setPosTrashPanel,
  setMemoFocusInfo,
} = contentsSlice.actions;
