import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { fitInResolutionOnMain } from '~/styles/layout';

export const Contents = styled.div`
  ${fitInResolutionOnMain}
  // padding-bottom: 55px;
  padding: 0 80px; //TODO: layout 조정필요
  @media only screen and (max-width: 768px) {
    padding: 0; //TODO: layout 조정필요
  }
`;

export const Group = styled.div`
  display: flex;
  // margin-bottom: 60px;
  // padding-top: 63px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 42px;
    // margin-bottom: 0px;
    // padding: 0 16px 28px;
  }
`;

export const Column = styled.div<{ left?: boolean; right?: boolean }>`
  min-width: 0;
  // margin-right: 30px;
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
  ${({ left, right }) => {
    // left : 최근 많이 조회된 문서, Featured
    if (left) {
      return css`
        padding-left: 44px;
        flex: 1 1 70%;
        @media only screen and (max-width: 768px) {
          padding-left: 0px;
        }
      `;
    }
    // right : 초보자 사용가이드 , 최근 변경된 문서
    if (right) {
      return css`
        padding: 0 25px;
        flex: 1 1 30%;
        max-width: 295px;
        @media only screen and (max-width: 768px) {
          max-width: unset;
          padding: 0;
        }
      `;
    }
    return css``;
  }}
`;
