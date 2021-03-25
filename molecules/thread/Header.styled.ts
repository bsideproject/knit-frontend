import styled from '@emotion/styled';
import { fitInResolution } from '~/styles/layout';
import * as font from '~/styles/font';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.palette.lightGrey};
`;

export const Aligner = styled.div`
  ${fitInResolution}
  position: relative;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const Category = styled.span`
  margin-bottom: 6px;
  ${font.set(16, 'bold')}
  ${font.ellipse(1)}
  line-height: 20px;
`;

export const Title = styled.span`
  margin-bottom: 20px;
  ${font.set(32, 'bold')}
  ${font.ellipse(1)}
  color: ${({ theme }) => theme.palette.primary};
  line-height: 40px;
`;

export const CreatedDate = styled.span`
  ${font.set(16, 'lighter')}
  color: ${({ theme }) => theme.palette.darkGrey};
  line-height: 20px;
`;

export const Task = styled.a``;

export const Tasks = styled.div`
  position: absolute;
  right: 20px;
  bottom: 30px;
  height: 20px;

  ${Task} {
    position: relative;
    padding: 0 12px;
    color: ${({ theme }) => theme.palette.darkGrey};

    &:not(:first-of-type) {
      ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 10%;
        width: 1px;
        height: 80%;
        background: ${({ theme }) => theme.palette.grey};
      }
    }
  }
`;
