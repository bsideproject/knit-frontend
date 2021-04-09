import mockData from './_data';
import { Container, TagsContainer, Tag, Headline, SearchInput } from './SearchBanner.styled';

const SearchBanner = () => {
  return (
    <Container>
      <Headline>IT의 모든것 Knit</Headline>
      <SearchInput placeholder="아이폰12 디자인 가이드" onSubmit={() => alert('search')} />

      <TagsContainer>
        {mockData.searchBanner.map(({ url, title }) => (
          <Tag key={url} url={url} title={title} />
        ))}
      </TagsContainer>
    </Container>
  );
};
export default SearchBanner;
