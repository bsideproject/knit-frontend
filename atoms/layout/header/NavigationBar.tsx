import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import { SigninModal } from '~/molecules/signin';
import { LeftBox, RightBox, RightContent, Wrapper, AtagStyled } from './NavigationBar.styled';
import Mainlogo from '~/public/assets/mainlogo';
import useSession, { signOut } from '~/utils/auth/session';

const NavigationBar = () => {
  const router = useRouter();

  const [signinModalOpened, setSigninModalOpened] = useState(false);
  const session = useSession();
  console.log(session);
  const handleClickSignin = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSigninModalOpened(true);
  };

  const onSubmit = (value: string) => {
    router.push(`/search/${value}`);
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
            <Link href="/">
              <a>문서 읽기</a>
            </Link>
            <Link href="/thread">
              <a>문서 작성</a>
            </Link>
            <SearchInput placeholder="검색어를 입력하세요." onSubmit={onSubmit} />
            {session ? (
              <>
                <Link href="/mypage">
                  <AtagStyled>마이페이지</AtagStyled>
                </Link>
                <a href="#" onClick={signOut}>
                  로그아웃
                </a>
              </>
            ) : (
              <a href="#" onClick={handleClickSignin}>
                시작하기
              </a>
            )}

            {signinModalOpened && <SigninModal onClickClose={() => setSigninModalOpened(false)} />}
          </RightContent>
        </RightBox>
      </Container>
    </Wrapper>
  );
};
export default NavigationBar;
