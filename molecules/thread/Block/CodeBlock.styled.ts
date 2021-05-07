import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { resolveProp } from '~/utils/styles';

// export const Container = styled(ContentEditable as any)<{ editable: boolean }>`
export const Container = styled.div<{ editable: boolean }>`
  position: relative;

  padding: 10px;
  border-radius: 4px;
  outline: none;

  /* caret-color: transparent; */

  ${resolveProp('editable', {
    false: css`
      cursor: default;
    `,
    true: css`
      cursor: pointer;
      color: #2f2f2f;

      &:hover,
      &:focus {
        background: #f3f2f5;
      }
      &:focus {
        box-shadow: 0px 0px 1px 1px #865acc80;
      }
    `,
  })}
`;
