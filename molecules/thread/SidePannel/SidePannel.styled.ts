import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 40px;
  height: 280px;

  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  cursor: pointer;
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
  & line[data-stroke] {
    stroke: #505055;
  }

  &:hover {
    & > * {
      fill: #5c16cb;
    }
    & line[data-stroke] {
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
