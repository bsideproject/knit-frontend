import styled from '@emotion/styled';
import { AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from '~/public/assets/icon';
import { theme } from '~/styles';
import { InlinePanel } from '~/@types/style';

export const Container = styled.div`
  position: absolute;
  width: 98px;
  height: 32px;
  display: flex;
  bottom: ${InlinePanel.BOTTOM};
  right: 0px;
  align-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    & > svg > path {
      stroke: ${theme.palette.primary};
    }
  }
`;

export const AlignLeftStyled = styled(AlignLeftIcon)``;

export const AlignCenterStyled = styled(AlignCenterIcon)``;

export const AlignRightStyled = styled(AlignRightIcon)``;
