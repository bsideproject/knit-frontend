import styled from '@emotion/styled';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '~/public/assets/icon';
import { CSSzIndex, InlinePanel } from '~/@types/style';
import { Input } from '../field';

export const Container = styled.div<{ top: number; left: number }>`
  position: absolute;
  z-index: ${CSSzIndex.THREAD_INLINE_PANEL};

  display: flex;
  bottom: ${InlinePanel.BOTTOM};
  right: 0px;
  top: 60px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 320px;
  height: 35px;
  padding-left: 5px;
  padding-right: 5px;

  top: ${({ top }) => `${top - 40}px`};
  left: ${({ left }) => `${left - 20}px`};
`;

export const InputStyled = styled(Input)`
  position: absolute;
  display: flex;
  align-items: center;
  width: 90%;
  background: #ffffff;
  border: 2px solid #e2e1eb;
  box-sizing: border-box;
  border-radius: 4px;
  &:focus {
    border: 2px solid #e2e1eb;
    outline: none;
  }
`;

export const AlignLeftStyled = styled(AlignLeftIcon)``;

export const AlignCenterStyled = styled(AlignCenterIcon)``;

export const AlignRightStyled = styled(AlignRightIcon)``;

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: ${CSSzIndex.GLOBAL_MODAL};
`;
