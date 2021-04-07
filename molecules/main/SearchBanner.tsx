import { useRouter } from 'next/router';
import { Hashtag } from '~/atoms/hashtag';
import mockData from './_data';

import { Container, HashtagsContainer, Headline, SearchInput } from './SearchBanner.styled';

const SearchBanner = () => {
  const router = useRouter();

  const onSubmit = (value: string) => {
    router.push(`/search/${value}`);
  };
  return (
    <Container>
      <Headline>IT의 모든것 Knit</Headline>
      <SearchInput placeholder="아이폰12 디자인 가이드" onSubmit={onSubmit} />

      <HashtagsContainer>
        {mockData.searchBanner.map(({ url, title }) => (
          <Hashtag key={url} url={url} title={title} colorMode="dark" />
        ))}
      </HashtagsContainer>
    </Container>
  );
};
export default SearchBanner;
