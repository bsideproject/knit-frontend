import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div<{ isEditMode?: boolean }>`
  padding: 10px 10px 0;
  border-radius: 4px;

  ${resolveProp('isEditMode', {
    true: css`
      cursor: pointer;
      &:hover {
        background: #f8f8f8;
      }
    `,
  })}
`;
