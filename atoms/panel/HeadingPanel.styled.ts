import styled from '@emotion/styled';
import { InlinePanel } from '~/@types/style';
import * as font from '~/styles/font';

export const Container = styled.div`
  position: absolute;
  width: 80px;
  height: 215px;
  bottom: ${InlinePanel.BOTTOM};
  padding: 10px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  position: relative;
  cursor: pointer;
  &:not(:last-of-type) {
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      right: 0px;
      width: 100%;
      height: 1.5px;
      background: #f3f2f5;
    }
  }
`;

export const H1 = styled.h1`
  ${font.set(24, 500)}
`;

export const H2 = styled.h2`
  ${font.set(22, 500)}
`;
export const H3 = styled.h1`
  ${font.set(20, 500)}
`;
export const MainText = styled.h1`
  ${font.set(18, 500)}
`;
export const Description = styled.h1`
  ${font.set(15, 500)}
  color: #818189;
`;
