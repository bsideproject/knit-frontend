import Link from 'next/link';
import { VFC } from 'react';
import styles from './Hashtag.module.scss';
import { IHashtag } from '~/@types';

interface HashtagProps extends IHashtag {}

const Hashtag: VFC<HashtagProps> = ({ url, title }) => {
  return (
    <div className={styles.wrapper}>
      <Link href={url}>
        <a className={styles.title}>{title}</a>
      </Link>
    </div>
  );
};
export default Hashtag;
