import mockData from './_data';
import MostViewItem from './MostViewItem';
import { Section } from '~/atoms/layout';
import styles from './MostViewSection.module.scss';

export default function MostViewSection() {
  return (
    <Section>
      <div className={styles.titleCover}>
        <Section.Title>최근 많이 조회된 문서</Section.Title>
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
    </Section>
  );
}
