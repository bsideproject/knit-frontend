import styled from '@emotion/styled';
import { Tag } from '~/atoms/tag';

export const Container = styled.div`
  position: relative;
  display: inline-block;

  & > ${Tag} {
    position: relative;
    margin: 0 10px 10px 0;
    height: 30px;
    background: transparent;
    opacity: 0;
  }
`;
