import styled from '@emotion/styled';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '~/public/assets/icon';
import { theme } from '~/styles';
import { CSSzIndex, InlinePanel } from '~/@types/style';
import { Input } from '../field';

export const Container = styled.div`
  position: absolute;
  z-index: ${CSSzIndex.THREAD_INLINE_PANEL};

  display: flex;
  bottom: ${InlinePanel.BOTTOM};
  right: 0px;
  top: 60px;
  justify-content: center;
  align-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  position: absolute;
  width: 340px;
  height: 46px;
`;

export const Content = styled.div`
  position: absolute;
  width: 314px;
  height: 34px;

  background: #ffffff;
  border: 2px solid #e2e1eb;
  box-sizing: border-box;
  border-radius: 4px;
  /* width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    & > svg > path {
      stroke: ${theme.palette.primary};
    }
  } */
`;

export const InputStyled = styled(Input)`
  position: absolute;
  width: 314px;
  height: 34px;

  background: #ffffff;
  border: 2px solid #e2e1eb;
  box-sizing: border-box;
  border-radius: 4px;
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
