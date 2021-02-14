import classNames from 'classnames';
import styles from './MostView.module.scss';

interface MostViewProps {
  number: number;
  title: string;
  desc: string;
  viewCount: number;
  likeCount: number;
}

export default function MostView({ number, title, desc, viewCount, likeCount }: MostViewProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>
        <span className={styles.number}>{number}</span>
        {title}
      </span>
      <span className={styles.desc}>{desc}</span>
      <div className={styles.countCover}>
        <span className={classNames(styles.count, styles.view)}>{viewCount.toLocaleString()}</span>
        <span className={classNames(styles.count, styles.like)}>{likeCount.toLocaleString()}</span>
      </div>
    </div>
  );
}
