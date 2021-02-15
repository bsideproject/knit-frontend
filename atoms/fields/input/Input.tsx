import styles from './Input.module.scss';

export interface Props {
  placeHolder?: string;
}
export default function Input({ placeHolder = '' }: Props) {
  return <input className={styles.input} placeholder={placeHolder} />;
}
