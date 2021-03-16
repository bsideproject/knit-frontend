import { FC } from 'react';
import { Button } from './styled';
import { Theme, Size } from '~/@types';

interface ButtonProps {
  type: Theme;
}

const ButtonComponent: FC<ButtonProps> = ({ type, children }) => {
  return (
    <Button type="button" typea={type} size={Size.MIDDLE}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
