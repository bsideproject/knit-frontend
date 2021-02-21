import classNames from 'classnames';

import styles from './Input.module.scss';
import Input, { Props as InputProps } from './Input';

interface Props extends InputProps {
  className?: string;
}
export default function SearchInput({ placeHolder, className }: Props) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <Input placeHolder={placeHolder} />
    </div>
  );
}
