import styled from '@emotion/styled';
import { fitInResolution } from '~/styles/layout';
import * as font from '~/styles/font';

export const Container = styled.div`
  ${fitInResolution};
`;

export const Header = styled.div`
  position: relative;

  height: 50px;

  display: flex;
  align-items: center;
`;

export const TaskList = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
`;

export const Task = styled.button`
  position: relative;

  padding: 0 15px;
  height: 100%;

  background: transparent;
  outline: none;
  border: none;

  ${font.set(16)}
  color: #555;

  cursor: pointer;

  &:not(:last-of-type) {
    ::after {
      content: '';
      position: absolute;
      top: 35%;
      right: 0;

      width: 1px;
      height: 30%;
      background: #999;
    }
  }
`;

export const Title = styled.span`
  margin-top: 40px;
  display: block;

  ${font.set(40, 'bold')}
  line-height: 50px;
`;

export const SubTitle = styled.span`
  margin-top: 20px;
  display: block;

  ${font.set(20)}
  color: #888;
  line-height: 25px;
`;

export const MetaList = styled.table`
  margin-top: 40px;
  border-collapse: collapse;
`;
