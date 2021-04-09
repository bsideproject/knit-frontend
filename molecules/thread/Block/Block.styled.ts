import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ContentEditable from 'react-contenteditable';
import { resolveProp } from '~/utils/styles';
import { BlockProps } from './types';

export const Container = styled(ContentEditable as any)<Omit<BlockProps, 'onChange'>>`
  border-radius: 4px;
  outline: none;

  ${resolveProp('disabled', {
    false: css`
      color: #2f2f2f;

      &:empty:before {
        content: attr(placeholder);
        color: #e2e1eb;
        cursor: text;
      }

      &:hover {
        background: #f3f2f5;
      }
    `,
  })}
`;
