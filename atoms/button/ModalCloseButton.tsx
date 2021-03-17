import { FC, MouseEventHandler } from 'react';
import { ModalCloseButtonStyled } from './ModalCloseButtonStyled';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ModalCloseButton: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <ModalCloseButtonStyled type="button" className={className} onClick={onClick}>
      {children}
    </ModalCloseButtonStyled>
  );
};

export default ModalCloseButton;
