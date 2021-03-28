import mockData from '../_data';
import Section from '../Section';
import { Column } from './MostViewSection.styled';
import MostViewItem from './MostViewItem';

const MostViewSection = () => {
  return (
    <Section title="최근 많이 조회된 문서">
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
    </Section>
  );
};
export default MostViewSection;
