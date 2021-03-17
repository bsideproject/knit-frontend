import styled from '@emotion/styled';

export const ModalCloseButtonStyled = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background: transparent;

  &::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(./assets/close.png);
    background-size: 20px 20px;
    background-repeat: no-repeat;
  }
`;
