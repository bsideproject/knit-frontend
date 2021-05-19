import { css } from '@emotion/react';
import styled from '@emotion/styled';
import ContentEditable from 'react-contenteditable';
import { resolveProp } from '~/utils/styles';
import { BlockProps } from './types';
import * as font from '~/styles/font';
import { theme } from '~/styles';

export const Container = styled(ContentEditable as any)<Omit<BlockProps, 'onChange'>>`
  padding: 10px;

  ${font.set(16)}
  white-space: pre-wrap;
  word-break: break-word;
  border-radius: 4px;

  outline: none;

  ${resolveProp('disabled', {
    false: css`
      color: #2f2f2f;

      &:empty:before {
        content: attr(placeholder);
        position: relative;
        top: 2px;
        color: #e2e1eb;
        font-weight: bold;
        cursor: text;
        pointer-events: none;
      }

      &:hover,
      &:focus {
        background: #f3f2f5;
      }
      &:focus {
        box-shadow: 0px 0px 1px 1px #865acc80;
      }
    `,
  })}

  a {
    color: ${theme.palette.primary} !important;
    text-decoration: underline;
  }
`;
