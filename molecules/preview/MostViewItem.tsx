import classNames from 'classnames';
import Link from 'next/link';
import { MostViewData } from '~/@types/MostView';
import styles from './MostViewItem.module.scss';

interface MostViewProps extends Omit<MostViewData, 'id'> {
  number: number;
}

export default function MostViewItem({ number, title, desc, viewCount, likeCount }: MostViewProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.number}>{number}</span>
      <Link href="#">
        <a className={styles.title}>{title}</a>
      </Link>
      <Link href="#">
        <a className={styles.desc}>{desc}</a>
      </Link>
      <div className={styles.countCover}>
        <span className={classNames(styles.count, styles.view)}>{viewCount.toLocaleString()}</span>
        <span className={classNames(styles.count, styles.like)}>{likeCount.toLocaleString()}</span>
      </div>
    </div>
  );
}
