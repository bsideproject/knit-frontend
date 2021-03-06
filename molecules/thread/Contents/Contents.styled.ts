import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div<{ isEditMode: boolean }>`
  position: relative;
  ${resolveProp('isEditMode', {
    true: css`
      padding-right: 70px;
    `,
  })}
  margin-top: 30px;
  margin-bottom: 100px;

  min-height: 400px;
  cursor: text;
`;

export const BlockWrapper = styled.div`
  padding-bottom: 10px;
`;
