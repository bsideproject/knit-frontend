import styled from '@emotion/styled';
import { CSSzIndex } from '~/@types/style';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 40px;
  height: 320px;

  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  transition: 0.16s ease-out;
  cursor: pointer;
  z-index: ${CSSzIndex.THREAD_SIDE_PANEL};
`;

export const IconContainer = styled.div`
  position: relative;

  width: 100%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;

  & > * {
    fill: #505055;
  }
  & *[data-stroke] {
    stroke: #505055;
  }

  &:hover {
    & > * {
      fill: #5c16cb;
    }
    & *[data-stroke] {
      stroke: #5c16cb;
    }
  }

  &:not(:last-of-type)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 27.5px;
    height: 1px;
    background: #f3f2f5;
  }
`;
