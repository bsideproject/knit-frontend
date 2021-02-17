import mockData from './_data';
import MostViewItem from './MostViewItem';
import { Section } from '~/atoms/layout';

const { Title, Contents, Column } = Section;

export default function MostViewSection() {
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
}
