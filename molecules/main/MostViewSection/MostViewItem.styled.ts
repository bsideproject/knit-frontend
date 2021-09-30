import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as font from '~/styles/font';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding: 26px 7px 18px 7px;
  border-top: 1px solid #eeeeee;
  cursor: pointer;
  @media (max-width: 768px) {
  }
`;

export const OrderNumber = styled.div`
  width: 19px;
  color: ${({ theme }) => theme.palette.primary};
  text-align: center;
  ${font.set(18, 'bold')}
  margin-right: 11px;
  line-height: 21px;
  @media (max-width: 768px) {
    width: 12px;
    font-size: 16px;
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  width: calc(100% - 19px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 768px) {
    width: calc(100% - 12px);
  }
`;

export const Title = styled.div`
  width: 100%;
  max-width: 418px;

  margin-bottom: 14px;
  ${font.set(16, 'bold')}
  ${font.ellipse(1)}
  color: ${({ theme }) => theme.palette.black};
  @media (max-width: 768px) {
    /* max-width: 268px; */
    ${font.set(14, 'bold')}
    margin-bottom: 3px;
  }
`;

export const Desc = styled.div`
  width: 100%;
  max-width: 400px;
  ${font.ellipse(1)}
  ${font.set(14)}
  margin-bottom: 4px;
  color: #909090;
  @media (max-width: 768px) {
    max-width: calc(100% - 18px);
    ${font.set(16)};
  }
`;

export const CountGroup = styled.div`
  width: 100%;
  /* max-width: 340px; */
  display: flex;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const Count = styled.span<{ type: 'view' | 'like' }>`
  ${font.set(12)}
  color: #909090;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  & > svg {
    margin-right: 2px;
  }

  ${resolveProp('type', {
    view: css`
      padding-left: 19px;
      background: url(/assets/view.svg) no-repeat left center;
    `,
    like: css`
      padding-left: 16px;
      background: url(/assets/thumb.svg) no-repeat left center;
    `,
  })}
`;
