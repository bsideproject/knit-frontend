import { useDispatch } from 'react-redux';
import { useRootState } from '~/app/store';
import { Button, PrimaryButton } from '../button';
import { closeDialog } from './slice';
import styles from './Dialog.module.css';

export default function Dialog() {
  const dispatch = useDispatch();
  const { opened, title, message } = useRootState((state) => state.dialog);

  const handleClickButton = () => {
    dispatch(closeDialog());
  };

  if (!opened) return null;
  return (
    <div className={styles.dialog}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.msg}>{message}</h2>
      <Button onClick={handleClickButton}>닫기</Button>
      <PrimaryButton>확인</PrimaryButton>
    </div>
  );
}
