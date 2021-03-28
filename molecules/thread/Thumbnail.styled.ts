import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ThreadAction } from '~/@types/resources/thread';

export const Container = styled.div<{ action: ThreadAction | undefined }>`
  height: 240px;
  display: flex;
  justify-content: center;

  ${({ action }) => {
    if (action === ThreadAction.EDIT) {
      return css`
        &:hover {
          cursor: pointer;
          opacity: 0.5;
        }
      `;
    }
    return null;
  }}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
`;
