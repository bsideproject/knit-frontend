import { FC } from 'react';
import { ButtonStyled, ButtonProps } from './ButtonStyled';
import { Size, Color } from '~/@types';

const Button: FC<ButtonProps> = ({
  color = Color.PRIMARY,
  size = Size.MIDDLE,
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <ButtonStyled
      type="button"
      className={className}
      size={size}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
