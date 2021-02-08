import Button, { ButtonProps } from './Button';
import { ButtonType } from './types';

type Props = Omit<ButtonProps, 'type'>;

export default function PrimaryButton({ children, ...restProps }: Props) {
  return (
    <Button {...restProps} type={ButtonType.PRIMARY}>
      {children}
    </Button>
  );
}
