import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fitInResolutionOnMain } from '~/styles/layout';

export const Contents = styled.div`
  ${fitInResolutionOnMain}
  padding-top: 55px;
  padding-bottom: 55px;
`;

export const Group = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

export const Column = styled.div<{ left?: boolean; right?: boolean }>`
  min-width: 0;
  margin-right: 30px;

  ${({ left, right }) => {
    if (left) {
      return css`
        flex: 1 1 70%;
      `;
    }
    if (right) {
      return css`
        flex: 1 1 30%;
        max-width: 295px;
      `;
    }
    return css``;
  }}
`;
