import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import { SigninModal } from '~/molecules/signin';
import { LeftBox, RightBox, RightContent, Wrapper } from './NavigationBar.styled';
import Mainlogo from '~/public/assets/mainlogo';

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
          <Link href="/">
            <a>
              <Mainlogo />
            </a>
          </Link>
        </LeftBox>
        <RightBox>
          <RightContent>
            랜덤 문서
            <SearchInput placeholder="검색어를 입력하세요." onSubmit={() => alert('search')} />
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
