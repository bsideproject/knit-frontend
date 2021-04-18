import styled from '@emotion/styled';

export const Container = styled.div<{ top: number; left: number }>`
  position: absolute;
  top: ${({ top }) => `${top - 40}px`};
  left: ${({ left }) => `${left - 20}px`};

  width: 355px;
  height: 32px;

  background: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  cursor: pointer;
`;
