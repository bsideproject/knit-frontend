import { FC, MouseEventHandler } from 'react';
import { Size, Color } from '~/@types';
import { ModalCloseButtonStyled } from './ModalCloseButtonStyled';

interface ButtonProps {
  color?: Color;
  size?: Size;
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
