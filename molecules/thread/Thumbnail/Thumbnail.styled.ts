import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as animation from '~/styles/animation';
import * as font from '~/styles/font';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div``;

export const ImageChangeButton = styled.div`
  position: absolute;
  width: 200px;
  height: 50px;
  display: none;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0, 0.5);
  border-radius: 8px;

  ${animation.toastUp(40)}

  ${font.set(20, 'bold')}
  color: white;
`;

export const Image = styled.img`
  width: 100%;
  height: 240px;
  display: block;
  object-fit: cover;
  object-position: center;
`;

export const ImageWrapper = styled.div<{ editable: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${resolveProp('editable', {
    true: css`
      &:hover {
        cursor: pointer;

        ${Image} {
          opacity: 0.8;
        }

        ${ImageChangeButton} {
          display: flex;
        }
      }
    `,
  })}
`;

export const TaskButton = styled.button<{ hasThumbnail: boolean }>`
  ${resolveProp('hasThumbnail', {
    true: css`
      margin-top: 10px;
    `,
    false: css`
      margin-top: 50px;
    `,
  })}

  background: transparent;
  border: none;
  outline: none;

  ${font.set(16)};
  color: #a09db1;

  cursor: pointer;

  &:hover {
    color: #5c16cb;
  }
`;
