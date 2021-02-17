import Link from 'next/link';
import styles from './Hashtag.module.scss';
import { Hashtag as HashtagType } from '~/@types/Hashtag';

type HashtagProps = HashtagType;

export default function Hashtag({ url, title }: HashtagProps) {
  return (
    <div className={styles.wrapper}>
      <Link href={url}>
        <a className={styles.title}>{title}</a>
      </Link>
    </div>
  );
}
