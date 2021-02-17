import classNames from 'classnames';
import { ChildrenProp } from '~/@types/props';
import styles from './Button.module.scss';

interface ButtonProps extends ChildrenProp {
  className?: string;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button type="button" className={classNames(className, styles.button)}>
      {children}
    </button>
  );
}
