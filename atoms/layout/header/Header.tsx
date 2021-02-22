import Link from 'next/link';
import { Container } from '~/atoms/layout';
import { SearchInput } from '~/atoms/field';
import styles from './Header.module.scss';

const TempLogo = () => {
  return (
    <div className={styles.tempLogo}>
      <Link href="/">
        <a>Knit</a>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.leftBox}>
          <TempLogo />
          전체 카테고리
        </div>
        <div className={styles.rightBox}>
          <div className={styles.rightContent}>
            랜덤 문서
            <SearchInput placeHolder="검색어를 입력하세요." />
            <Link href="/signin">
              <a>로그인</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Header;
