import { FC } from 'react';
import { Color, Size } from '~/@types';
import { ButtonProps } from '~/atoms/button/ButtonStyled';
import { StyledButton } from './ButtonTask.styled';

interface Props extends Partial<Omit<ButtonProps, 'size'>> {}

const ButtonTask: FC<Props> = ({ children, ...restProps }) => {
  return (
    <StyledButton size={Size.SMALL} color={Color.WHITE} {...restProps}>
      {children}
    </StyledButton>
  );
};

export default ButtonTask;
