import { useRouter } from 'next/router';
import { VFC } from 'react';
import { Thread } from '~/@types/resources/thread';
import { TagsContainer } from '../main/SearchBanner.styled';
import { label } from '../thread/Category/Category';
import { Column, Container, Title, Content, Image, Article, Hashtag } from './Threads.styled';

const Threads: VFC<Thread> = ({ id, title, subTitle, categories, thumbnailUrl }) => {
  const router = useRouter();

  const handleClickedContainer = () => {
    router.push(`/thread/${id}`);
  };
  return (
    <Container onClick={handleClickedContainer}>
      <Content>
        <Column left>
          <Title>{title}</Title>
          <Article>{subTitle}</Article>

          <TagsContainer>
            {categories?.map(({ categoryId, value }) => {
              return (
                <Hashtag key={categoryId} title={label[value]} url={`/search/${label[value]}`} />
              );
            })}
          </TagsContainer>
        </Column>
        <Column right>
          <Image src={thumbnailUrl ?? ''} />
        </Column>
      </Content>
    </Container>
  );
};

export default Threads;
