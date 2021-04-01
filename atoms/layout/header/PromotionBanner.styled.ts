import styled from '@emotion/styled';
import * as layout from '~/styles/layout';
import * as font from '~/styles/font';
import * as animation from '~/styles/animation';
import { CloseButton as CloseButtonAtom } from '~/atoms/button';

export const HEIGHT_PX = 50;

export const Container = styled.div`
  background-color: #eefdfb;
  height: ${HEIGHT_PX}px;
`;

export const Aligner = styled.div`
  ${layout.fitInResolution}
  position: relative;

  height: 100%;

  display: flex;
  align-items: center;

  ${font.set(16)};
`;

export const RightSection = styled.div`
  position: absolute;
  top: 0;
  right: 20px;

  height: 100%;

  display: flex;
  align-items: center;

  ${font.set(16, 'lighter')};
`;

export const CloseButton = styled(CloseButtonAtom)`
  &:hover {
    ${animation.wriggle}
  }
`;
