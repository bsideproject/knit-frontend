import { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import mockData from './_data';
import {
  Container,
  TagsContainer,
  Tag,
  Headline,
  HamburgerButton,
  SearchInput,
  SearchContainer,
  HeaderFirst,
  HeaderKnit,
} from './SearchBanner.styled';

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
      <HamburgerButton />
      <Headline>
        <HeaderFirst>IT의 모든것</HeaderFirst>
        <HeaderKnit>Knit wiki</HeaderKnit>
      </Headline>
      <SearchContainer>
        <SearchInput placeholder="검색어를 입력해주세요" onSubmit={onSubmit} />

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
      </SearchContainer>
    </Container>
  );
};
export default SearchBanner;
