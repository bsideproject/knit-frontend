import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { CloseButton } from '~/atoms/button';
import { Tag } from '~/atoms/tag';
import { resolveProp } from '~/utils/styles';

export const DeleteButton = styled(CloseButton)`
  position: absolute;
  top: 0px;
  right: 10px;
  height: 25px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #f7b8ce;

  border-radius: 4px;
  transform: translate(0px);
  opacity: 0;

  z-index: -1;
`;

export const Container = styled.div<{ editting?: boolean }>`
  position: relative;
  display: inline-block;

  & > ${Tag} {
    position: relative;
    margin: 0 10px 10px 0;
    background: #efe8fa;
    cursor: pointer;
  }

  ${resolveProp('editting', {
    true: css`
      & > ${Tag} {
        cursor: text;
      }

      &:hover {
        & > ${Tag} {
          z-index: 1;
          background: #f7b8ce;
        }
        & > ${DeleteButton} {
          z-index: 2;
          transform: translate(15px);
          opacity: 1;
        }
      }
    `,
  })}
`;
