import { FC } from 'react';
import {
  SerachHeader,
  KnitHomeButton,
  SearchInput,
  LeftSection,
  RightMenuSection,
  ClearButton,
} from './SearchHeaderSection.styled';

interface Props {
  scroll: number;
}

const SearchHeaderSection: FC<Props> = ({ scroll = 0 }) => {
  return (
    <SerachHeader scroll={scroll}>
      <LeftSection>
        <KnitHomeButton />
        <SearchInput placeholder="아이폰12 가이드" />
        <ClearButton />
      </LeftSection>
      <RightMenuSection />
    </SerachHeader>
  );
};

export default SearchHeaderSection;
