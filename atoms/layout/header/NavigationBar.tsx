import Link from 'next/link';
import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import { SigninModal } from '~/molecules/signin';
import { useOnClickOutside } from '~/utils/dom';
import { LeftBox, RightBox, RightContent, Wrapper, AtagStyled } from './NavigationBar.styled';
import Mainlogo from '~/public/assets/mainlogo';
import useSession, { signOut } from '~/utils/auth/session';
import CategoryDropDown from './CategoryDropDown';

const NavigationBar = () => {
  const router = useRouter();

  const [signinModalOpened, setSigninModalOpened] = useState(false);
  const [categoryDropDownOpened, setCategoryDropDownOpened] = useState(false);
  const session = useSession();

  const outofFocusHref = () => {
    if (categoryDropDownOpened) {
      setCategoryDropDownOpened(false);
    }
  };
  const elemRef = useOnClickOutside<HTMLDivElement>(outofFocusHref, [categoryDropDownOpened]);

  const handleClickSignin = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setSigninModalOpened(true);
  };

  const onSubmit = (value: string) => {
    router.push(`/search/${value}`);
  };

  const handleMouseClickedHref = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setCategoryDropDownOpened((prev) => !prev);
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
            <a href="#" onClick={handleMouseClickedHref}>
              문서 읽기
            </a>
            {categoryDropDownOpened && <CategoryDropDown elemRef={elemRef} />}
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
