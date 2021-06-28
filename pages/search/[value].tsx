import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NoSearchData, Threads, mockData, Layout } from '~/molecules/search';

const { Container, ThreadsContainer, TotalCount, TextInput, CategoryContanier, Category } = Layout;

const categorys = ['문서', '토론', '질문'] as const;
export type CategoryTypes = '문서' | '토론' | '질문';
type FormData = {
  searchValue: string;
};
const SearchPage: FC = () => {
  const methods = useForm<FormData>();
  const { setValue } = methods;
  const router = useRouter();
  const { value: queryValue } = router.query;
  const [searchValue, setSearchValue] = useState('');
  const [currentCategory, setCurrentCategory] = useState<CategoryTypes>('문서');
  const [mockResponseData, setMockResponseData] = useState<typeof mockData | null>();

  useEffect(() => {
    if (typeof queryValue === 'string') {
      setSearchValue(queryValue);
      // setValue('searchValue', queryValue);
    }
  }, [queryValue, setValue]);

  useEffect(() => {
    if (searchValue) {
      // api fetch delay 2s
      const responseData = searchValue === '카카오' ? mockData : null;
      setMockResponseData(responseData);
    }
  }, [searchValue]);

  return (
    <>
      <Container>
        <TextInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="검색어를 입력하세요."
        />
        <CategoryContanier>
          {categorys.map((category, i) => (
            <>
              <Category
                highlight={category === currentCategory}
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {category}
              </Category>
              {i !== categorys.length - 1 && '|'}
            </>
          ))}
        </CategoryContanier>
      </Container>

      <ThreadsContainer>
        <Container>
          {mockResponseData ? (
            <>
              <TotalCount>총 {mockResponseData.length}건</TotalCount>
              {mockResponseData.map(({ threadId, title, content, hashtags }) => {
                return (
                  <Threads key={threadId} title={title} content={content} hashtags={hashtags} />
                );
              })}
            </>
          ) : (
            <NoSearchData searchValue={searchValue} />
          )}
        </Container>
      </ThreadsContainer>
    </>
  );
};

export default SearchPage;
