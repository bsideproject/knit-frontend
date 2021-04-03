import Link from 'next/link';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import { LeftBox, RightBox, RightContent, Wrapper } from './AdminNavigationBar.styled';

const AdminNavigationBar = () => {
  return (
    <Wrapper>
      <Container>
        <LeftBox>
          <Link href="/">
            <a>Knit</a>
          </Link>
          <Link href="/">
            <a>전체 카테고리</a>
          </Link>
          <Link href="/">
            <a>관리자용 대쉬보드</a>
          </Link>
        </LeftBox>
        <RightBox>
          <RightContent>
            랜덤 문서
            <SearchInput placeholder="검색어를 입력하세요." onSubmit={() => alert('search')} />
          </RightContent>
        </RightBox>
      </Container>
    </Wrapper>
  );
};
export default AdminNavigationBar;
