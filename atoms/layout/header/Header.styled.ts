import styled from '@emotion/styled';
import { CSSzIndex } from '~/app/constants';

export const Wrapper = styled.div`
  position: fixed;
  z-index: ${CSSzIndex.HEADER};
  display: flex;
  width: 100%;
  align-self: center;
  align-items: center;
  height: 80px;
  background: linear-gradient(0deg, #ffffff, #ffffff),
    linear-gradient(270deg, #81007f 0%, #5af5e1 100%), #81007f;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);

  div {
    display: flex;
    align-items: center;
  }
`;

export const TempLogoWrapper = styled.div`
  width: 67px;
  height: 34.67px;
  font-family: Noto Sans KR; //(@kwonth211):Todo global font
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 26px;
  color: #000000;
  margin-right: 30px;
`;

export const LeftBox = styled.div`
  margin-right: 50px;
`;

export const RightBox = styled.div`
  width: 80%;
  justify-content: flex-end;
`;

export const RightContent = styled.div`
  width: 400px;
  justify-content: space-around;
`;
