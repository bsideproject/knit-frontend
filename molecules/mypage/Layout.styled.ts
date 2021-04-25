import styled from '@emotion/styled';
import { fitInResolutionOnPage } from '~/styles/layout';
import * as font from '~/styles/font';
import { theme } from '~/styles';

export const Container = styled.div<{ marginTop?: string }>`
  ${fitInResolutionOnPage};
  display: flex;
  position: relative;
  margin-top: ${({ marginTop }) => marginTop};
  flex-direction: column;
`;

export const BackProfileContanier = styled.div`
  height: 290px;
  background: rgba(248, 244, 255, 0.8);
  border-radius: 0px 0px 80px 80px;
  padding: 50px;
  margin-bottom: 100px;
`;

export const Nickname = styled.h2`
  ${font.set(24, 'bold')}
  line-height: 40px;

  letter-spacing: -1px;

  color: #2f2f2f;
`;

export const Content = styled.div``;

export const HistoryContainer = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;

  & > button {
    ${font.set(16, 'bold')}
    color: ${theme.palette.primary};
  }
`;

export const Title = styled.h2`
  /* position: absolute;
width: 132px;
height: 40px;
left: 530px;
top: 456px; */
  ${font.set(24, 'bold')}
  /* font-family: Noto Sans KR;
font-style: normal;
font-weight: bold;
font-size: 24px; */
line-height: 40px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;

  color: ${theme.palette.black};
`;

export const LinkedContent = styled.div`
  margin-top: 20px;
  & > a {
    display: block;
    padding-bottom: 10px;
    & > span {
      margin-right: 10px;
    }
    & > svg {
      margin-right: 10px;
    }
  }
`;

export const ProfileUpdate = styled.div`
  position: absolute;

  display: flex;
  align-items: center;

  right: 80px;
  top: 30px;
  ${font.set(14)}
  & > a {
    margin-right: 10px;
    padding-top: 5px;
  }

  & > svg {
  }

  cursor: pointer;
  color: #505055;
`;
