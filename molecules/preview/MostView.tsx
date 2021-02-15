import classNames from 'classnames';
import { MostViewData } from '~/@types/MostView';
import { Link } from '~/atoms/link';
import styles from './MostView.module.scss';

interface MostViewProps extends Omit<MostViewData, 'id'> {
  number: number;
}

export default function MostView({ number, title, desc, viewCount, likeCount }: MostViewProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.number}>{number}</span>
      <Link className={styles.title} href="#">
        {title}
      </Link>
      <Link className={styles.desc} href="#">
        {desc}
      </Link>
      <div className={styles.countCover}>
        <span className={classNames(styles.count, styles.view)}>{viewCount.toLocaleString()}</span>
        <span className={classNames(styles.count, styles.like)}>{likeCount.toLocaleString()}</span>
      </div>
    </div>
  );
}
