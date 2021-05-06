import styled from '@emotion/styled';
import { PanelCompProps } from './Panel';
import {
  BoldIcon,
  LineThroughIcon,
  ItalicIcon,
  UnderLineIcon,
  FontColorIcon,
  AlignLeftPanelIcon,
  BackColorIcon,
} from '~/public/assets/icon';

export const HeadingStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  padding-left: 7px;
  align-items: center;
`;

export const BoldStyled = styled(BoldIcon)``;

export const LineThroughStyled = styled(LineThroughIcon)``;

export const ItalicStyled = styled(ItalicIcon)``;

export const UnderLineStyled = styled(UnderLineIcon)``;

export const FontColorStyled = styled(FontColorIcon)<PanelCompProps>`
  padding-top: 4px;
  & > svg:nth-last-of-type(1) > path {
    fill: ${({ currentStyle }) => currentStyle?.color};
  }
`;

export const BackColorStyled = styled(BackColorIcon)`
  padding-top: 4px;
`;

export const AlignTextStyled = styled(AlignLeftPanelIcon)``;

export const UrlStyled = styled.div``;
