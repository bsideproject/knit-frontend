import Button, { ButtonProps } from './Button';
import { ButtonType } from './types';

type DangerButtonProps = Omit<ButtonProps, 'type'>;

export default function DangerButton({ children, ...restProps }: DangerButtonProps) {
  return (
    <Button {...restProps} type={ButtonType.DANGER}>
      {children}
    </Button>
  );
}
