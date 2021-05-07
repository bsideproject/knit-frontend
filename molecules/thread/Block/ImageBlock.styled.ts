import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { resolveProp } from '~/utils/styles';
import * as font from '~/styles/font';

export const Container = styled.div<{ editable: boolean }>`
  position: relative;

  padding: 10px;
  border-radius: 4px;
  outline: none;

  caret-color: transparent;

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

  & > img {
    width: 100%;
    height: 300px;
  }
`;

export const RepresentButton = styled.button<{ represent: boolean }>`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 41px;
  height: 24px;

  outline: none;
  border: none;
  border-radius: 14px;

  color: white;
  ${font.set(12)}
  text-align: center;

  ${resolveProp('represent', {
    true: css`
      background: #5c16cb;
      cursor: default;
    `,
    false: css`
      background: rgba(47, 47, 47, 0.3);
      cursor: pointer;

      &:hover {
        background: rgba(47, 47, 47, 0.5);
      }
    `,
  })}
`;
