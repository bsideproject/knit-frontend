import classNames from 'classnames';
import Link from 'next/link';
import { VFC } from 'react';
import mockData from './_data';
import { Section } from '~/atoms/layout';
import { IMostViewData } from '~/@types/db';
import styles from './MostViewItem.module.scss';

const { Title, Contents, Column } = Section;

const MostViewSection = () => {
  return (
    <Section>
      <Title>최근 많이 조회된 문서</Title>
      <Contents>
        <Column>
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
        </Column>
        <Column>
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
        </Column>
      </Contents>
    </Section>
  );
};
export default MostViewSection;

interface MostViewProps extends Omit<IMostViewData, 'id'> {
  number: number;
}

const MostViewItem: VFC<MostViewProps> = ({ number, title, desc, viewCount, likeCount }) => {
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
};
