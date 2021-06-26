import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import mockData from './_data';
import { Container, TagsContainer, Tag, Headline, SearchInput } from './SearchBanner.styled';

const SearchBanner = () => {
  const router = useRouter();

  const onSubmit = (value: string) => {
    router.push(`/search/${value}`);
  };

  const handleClick = (title: string) => {
    router.push(`/search/${encodeURIComponent(title)}`);
  };
  return (
    <Container>
      <Headline>IT의 모든것 Knit</Headline>
      <SearchInput placeholder="아이폰12 디자인 가이드" onSubmit={onSubmit} />

      <TagsContainer>
        {mockData.searchBanner.map(({ url, title }) => (
          <Tag
            key={url}
            url={url}
            title={title}
            onClick={(e: MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              handleClick(title);
            }}
          />
        ))}
      </TagsContainer>
    </Container>
  );
};
export default SearchBanner;
