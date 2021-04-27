import styled from '@emotion/styled';
import { theme } from '~/styles';
import * as font from '~/styles/font';

export const Box = styled.div`
  width: 850px;
  display: flex;
  padding: 30px;
  background: ${theme.palette.white};
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  ${font.set(16, 'bold')}
  width:10%;
  margin-right: 60px;
  line-height: 70px;
  color: ${theme.palette.black};
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Label = styled.div`
  ${font.set(14)}
  width:90px;
  color: #505055;
  line-height: 40px;
`;

export const Row = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: row;
  padding: 15px 0px 15px 0px;
  & > input {
    background: red;
    /* padding-left: 30px !important; */
  }
  justify-content: flex-end;
  /* padding-left: 100px; */

  padding-right: ${({ align }) => align !== 'right' && `80px`};
  /* padding-right: 200px; */
`;
