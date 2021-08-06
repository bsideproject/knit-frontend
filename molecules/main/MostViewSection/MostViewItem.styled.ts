import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as font from '~/styles/font';
import { resolveProp } from '~/utils/styles';

export const Container = styled.div`
  margin: 0 7px;
  padding: 20px 0 20px 20px;
  border-top: 1px solid #eeeeee;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: flex;
    padding: 10px 16px;
    margin: 0 14px 0 18px;
    overflow: hidden;
  }
`;

export const OrderNumber = styled.span`
  // width: 24px;
  // position: absolute;
  // top: 18px;
  // left: 0;

  color: ${({ theme }) => theme.palette.primary};
  font-size: 18px;
  text-align: center;
  font-weight: bold;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.span`
  margin-bottom: 14px;

  ${font.set(16)}
  ${font.ellipse(1)}
  color: ${({ theme }) => theme.palette.black};

  @media only screen and (max-width: 768px) {
    ${font.set(14)}
    margin-bottom: 3px;
    font-weight: bold;
  }
`;

export const Desc = styled.span`
  margin-bottom: 14px;

  ${font.set(14)}
  ${font.ellipse(1)}
  color: #909090;
  @media only screen and (max-width: 768px) {
    ${font.set(16)}
    margin-bottom: 0px;
  }
`;

export const CountGroup = styled.div`
  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
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
      // ::before {
      //content: ''; // view count icon
      // }
      padding-left: 19px;
      background: url(/assets/view.svg) no-repeat left center;
    `,
    like: css`
      // ::before {
      //content: ''; // like count icon
      // }
      padding-left: 16px;
      background: url(/assets/thumb.svg) no-repeat left center;
    `,
  })}
`;
