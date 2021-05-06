import styled from '@emotion/styled';
import { CSSzIndex, InlinePanel } from '~/@types/style';

export const Container = styled.div`
  position: absolute;
  z-index: ${CSSzIndex.THREAD_INLINE_PANEL};

  display: flex;
  flex-wrap: wrap;
  width: 84px;
  height: 184px;
  bottom: ${InlinePanel.BOTTOM};
  right: 84px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const Color = styled.div<{ colorCode: string }>`
  background: ${({ colorCode }) => colorCode};
  border: ${({ colorCode }) => colorCode === '#FFFFFF' && `1px solid #2F2F2F`};
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin: 4px;
  cursor: pointer;
`;
export const OverlayContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: ${CSSzIndex.GLOBAL_MODAL};
`;
