import styled from '@emotion/styled';
import { CSSzIndex } from '~/@types/style';

export const Container = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top - 40}px`};
  left: ${({ left }) => `${left - 20}px`};

  width: 355px;
  height: 35px;
  z-index: ${CSSzIndex.THREAD_INLINE_PANEL};
  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
`;

export const PanelContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 5px 3px 5px 10px;
`;
export const PanelContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  &:first-of-type {
    width: 75px;
  }
  width: 35px;
  height: 25px;
  justify-content: center;
  cursor: pointer;

  &:not(:last-of-type) {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0px;
      width: 1.2px;
      height: 100%;
      background: #f3f2f5;
    }
  }

  &:hover {
    background: #f2f2f2;
  }
`;
