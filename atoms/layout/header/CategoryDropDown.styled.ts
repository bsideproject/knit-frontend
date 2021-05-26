import styled from '@emotion/styled';
import * as font from '~/styles/font';

export const Container = styled.div`
  position: absolute;
  top: 58px;
  right: 220px;
  width: 492px;
  height: 52px;
  background: #ffffff;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
`;

export const Category = styled.div`
  cursor: pointer;
  ${font.set(15)}
  &:hover {
    color: ${({ theme }) => theme.palette.primary};
    ${font.set(15, 'bold')}
  }
`;
