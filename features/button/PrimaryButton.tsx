import Button, { ButtonProps } from './Button';
import { ButtonType } from './types';

type PrimaryButtonProps = Omit<ButtonProps, 'type'>;

export default function PrimaryButton({ children, ...restProps }: PrimaryButtonProps) {
  return (
    <Button {...restProps} type={ButtonType.PRIMARY}>
      {children}
    </Button>
  );
}
