import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Anchor = styled.a`
  position: relative;

  padding: 0 15px;
  height: 100%;

  display: inline-flex;
  align-items: center;

  ${font.set(16)}
  color: #555;

  cursor: pointer;

  &:not(:last-of-type) {
    ::after {
      content: '';
      position: absolute;
      top: 35%;
      right: 0;

      width: 1px;
      height: 30%;
      background: #999;
    }
  }
`;
