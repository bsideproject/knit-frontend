import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import { SigninModal } from '~/molecules/signin';
import { TempLogoWrapper, LeftBox, RightBox, RightContent, Wrapper } from './NavigationBar.styled';

const TempLogo = () => {
  return (
    <TempLogoWrapper>
      <Link href="/">
        <a>Knit</a>
      </Link>
    </TempLogoWrapper>
  );
};

const NavigationBar = () => {
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
              시작하기
            </a>
            {signinModalOpened && <SigninModal onClickClose={() => setSigninModalOpened(false)} />}
          </RightContent>
        </RightBox>
      </Container>
    </Wrapper>
  );
};
export default NavigationBar;
