import { VFC } from 'react';
import { TagsContainer } from '../main/SearchBanner.styled';
import { Column, Container, Title, Content, Image, Article, Hashtag } from './Threads.styled';
import mockdata from './_data';

const Threads: VFC<Omit<typeof mockdata[0], 'threadId'>> = ({ title, content, hashtags }) => {
  return (
    <Container>
      <Content>
        <Column left>
          <Title>{title}</Title>
          <Article>{content}</Article>

          <TagsContainer>
            {hashtags?.map(({ hashtagId, title: hasgtagTitle }) => {
              return <Hashtag key={hashtagId} title={hasgtagTitle} url={`/search/${title}`} />;
            })}
          </TagsContainer>
        </Column>
        <Column right>
          <Image src="https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile29.uf.tistory.com%2Fimage%2F99B87D3359AF7F3821B671" />
        </Column>
      </Content>
    </Container>
  );
};

export default Threads;
