import mockData from './_data';
import MostViewItem from './MostViewItem';
import { Section } from '~/atoms/layout';

export default function MostViewSection() {
  return (
    <Section>
      <Section.Title>최근 많이 조회된 문서</Section.Title>
      <Section.Contents>
        <Section.Column>
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
        </Section.Column>
        <Section.Column>
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
        </Section.Column>
      </Section.Contents>
    </Section>
  );
}
