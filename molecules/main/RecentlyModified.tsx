import { Container, Contents, Title } from './RecentlyModified.styled';
import RecentlyModifiedItem from './RecentlyModifiedItem';
import mockData from './_data';

export default function RecentlyModified() {
  return (
    <Container>
      <Title>최근 변경된 문서</Title>
      <Contents>
        {mockData.recentlyModified.map(({ id, title, modifiedDate }) => (
          <RecentlyModifiedItem key={id} title={title} modifiedDate={modifiedDate} />
        ))}
      </Contents>
    </Container>
  );
}
