import { FC, MouseEventHandler } from 'react';
import { Button } from './styled';
import { Size, Color } from '~/@types';

interface ButtonProps {
  color?: Color;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent: FC<ButtonProps> = ({ color = Color.PRIMARY, children, onClick }) => {
  return (
    <Button type="button" size={Size.MIDDLE} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
