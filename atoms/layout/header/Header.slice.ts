import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HEIGHT_PX as NAVIGATION_BAR_HEIGHT_PX } from './NavigationBar.styled';

interface HeaderState {
  // 상단 고정영역 높이 값
  heightPx: number;
}

const initialState: HeaderState = {
  heightPx: NAVIGATION_BAR_HEIGHT_PX,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeightPx(state, { payload }: PayloadAction<number>) {
      state.heightPx = payload;
    },
  },
});

export const { reducer } = headerSlice;
export const { setHeightPx } = headerSlice.actions;
