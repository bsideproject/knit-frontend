import { FC, MouseEventHandler } from 'react';
import { Button } from './styled';
import { Size, Color } from '~/@types';

interface ButtonProps {
  color?: Color;
  size?: Size;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonComponent: FC<ButtonProps> = ({
  color = Color.PRIMARY,
  size = Size.MIDDLE,
  children,
  onClick,
}) => {
  return (
    <Button type="button" size={size} color={color} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
