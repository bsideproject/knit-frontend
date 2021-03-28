import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  padding: 20px 0 20px 24px;

  position: relative;
  border-top: 1px solid #eeeeee;

  &:last-of-type {
    border-bottom: 1px solid #eeeeee;
  }
`;

export const OrderNumber = styled.span`
  width: 24px;

  position: absolute;
  top: 18px;
  left: 0;

  color: ${({ theme }) => theme.palette.primary};
  font-size: 18px;
  text-align: center;
`;

export const Title = styled.span`
  margin-bottom: 14px;

  ${font.set(16)}
  ${font.ellipse(1)}
  color: ${({ theme }) => theme.palette.black};
`;

export const Desc = styled.span`
  margin-bottom: 14px;

  ${font.set(14)}
  ${font.ellipse(1)}
  color: #909090;
`;

export const Count = styled.span<{ type: 'view' | 'like' }>`
  ${font.set(12)}
  color: #909090;

  &:not(:last-of-type) {
    margin-right: 10px;
  }

  ${({ type }) => {
    if (type === 'view') {
      return css`
        ::before {
          content: ''; // view count icon
        }
      `;
    }
    if (type === 'like') {
      return css`
        ::before {
          content: ''; // like count icon
        }
      `;
    }
    return css``;
  }}
`;
