import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import { SigninModal } from '~/molecules/signin';
import { TempLogoWrapper, LeftBox, RightBox, RightContent, Wrapper } from './Header.styled';

const TempLogo = () => {
  return (
    <TempLogoWrapper>
      <Link href="/">
        <a>Knit</a>
      </Link>
    </TempLogoWrapper>
  );
};

const Header = () => {
  const [signinModalOpened, setSigninModalOpened] = useState(false);

  const handleClickSignin = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSigninModalOpened(true);
  };

  return (
    <Wrapper>
      <Container>
        <LeftBox>
          <TempLogo />
          전체 카테고리
        </LeftBox>
        <RightBox>
          <RightContent>
            랜덤 문서
            <SearchInput placeHolder="검색어를 입력하세요." />
            <a href="#" onClick={handleClickSignin}>
              로그인
            </a>
            {signinModalOpened && <SigninModal onClickClose={() => setSigninModalOpened(false)} />}
          </RightContent>
        </RightBox>
      </Container>
    </Wrapper>
  );
};
export default Header;
