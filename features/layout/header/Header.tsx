import Link from 'next/link';
import { Container } from '~/features/layout/container';
import { Button } from '../../button';
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

export default function Header() {
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
            <Button>검색 버튼</Button>
            <Link href="/signin">
              <a>로그인</a>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
