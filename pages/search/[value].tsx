import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';
import { uniqueId } from 'lodash';
import { NoSearchData, Threads, Layout } from '~/molecules/search';
import { fetcher } from '~/utils/api';
import useDebounce from '~/utils/hooks/useDebounce';
import { Search } from '~/@types/resources/search';

const { Container, ThreadsContainer, TotalCount, TextInput, CategoryContanier, Category } = Layout;

const categorys = ['문서', '토론', '질문'] as const;
export type CategoryTypes = '문서' | '토론' | '질문';
type FormData = {
  searchValue: string;
};

const searchEndpoint = ({ search, page = '1' }: { search: string; page?: string }) => {
  return `/v1/home/search?search=${encodeURIComponent(search)}&page=${page}`;
};

const SearchPage: FC = () => {
  const methods = useForm<FormData>();
  const { setValue } = methods;
  const router = useRouter();
  const { value: queryValue } = router.query;
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 100);
  const [currentCategory, setCurrentCategory] = useState<CategoryTypes>('문서');

  const { data } = useSWR<Search>(
    () => (debouncedSearch ? searchEndpoint({ search: debouncedSearch }) : null),
    fetcher,
    {
      dedupingInterval: 2000,
    }
  );
  useEffect(() => {
    if (typeof queryValue === 'string') {
      setSearchValue(queryValue);
    }
  }, [queryValue, setValue]);
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
          {data === undefined ? null : data?.threads?.length > 0 ? (
            <>
              <TotalCount>총 {data.count}건</TotalCount>
              {data.threads.map(({ id, title, subTitle, categories, thumbnailUrl }) => {
                return (
                  <Threads
                    key={uniqueId(id?.toString())}
                    id={id}
                    title={title}
                    subTitle={subTitle}
                    categories={categories}
                    thumbnailUrl={thumbnailUrl}
                  />
                );
              })}
            </>
          ) : (
            <NoSearchData searchValue={debouncedSearch} />
          )}
        </Container>
      </ThreadsContainer>
    </>
  );
};

export default SearchPage;
