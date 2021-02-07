import Button, { ButtonProps } from './Button';
import { ButtonType } from './types';

type Props = Omit<ButtonProps, 'type'>;

export default function DangerButton({ children, ...restProps }: Props) {
  return (
    <Button {...restProps} type={ButtonType.DANGER}>
      {children}
    </Button>
  );
}
