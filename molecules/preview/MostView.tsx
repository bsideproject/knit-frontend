import classNames from 'classnames';
import { Typograpy } from '~/atoms/typography';
import mockData from './data';
import MostViewItem from './MostViewItem';
import styles from './MostView.module.scss';

export default function MostView() {
  return (
    <div className={classNames(styles.column, styles.left)}>
      <div className={styles.section}>
        <div className={styles.titleCover}>
          <Typograpy>최근 많이 조회된 문서</Typograpy>
        </div>
        <div className={styles.contents}>
          <div className={styles.sectionColumn}>
            {mockData.mostView
              .filter((_, index) => index % 2 === 0)
              .map(({ id, title, desc, viewCount, likeCount }, index) => (
                <MostViewItem
                  key={id}
                  number={index * 2 + 1}
                  title={title}
                  desc={desc}
                  viewCount={viewCount}
                  likeCount={likeCount}
                />
              ))}
          </div>
          <div className={styles.sectionColumn}>
            {mockData.mostView
              .filter((_, index) => index % 2 === 1)
              .map(({ id, title, desc, viewCount, likeCount }, index) => (
                <MostViewItem
                  key={id}
                  number={index * 2 + 2}
                  title={title}
                  desc={desc}
                  viewCount={viewCount}
                  likeCount={likeCount}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
