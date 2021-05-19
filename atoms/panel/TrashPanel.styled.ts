import styled from '@emotion/styled';
import { TrashCanIcon } from '~/public/assets/icon';
import { CSSzIndex, InlinePanel } from '~/@types/style';

export const Container = styled.div<{ top: number; left: number }>`
  position: absolute;
  z-index: ${CSSzIndex.THREAD_INLINE_PANEL};
  cursor: pointer;
  display: flex;
  /* bottom: ${InlinePanel.BOTTOM}; */
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  width: 40px;
  height: 32px;

  top: ${({ top }) => `${top - 50}px`};
  left: ${({ left }) => `${left - 20}px`};
`;

export const OverlayContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: ${CSSzIndex.GLOBAL_MODAL};
`;

export const TrashIcon = styled(TrashCanIcon)``;
