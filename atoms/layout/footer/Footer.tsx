import { Container } from '~/atoms/layout';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <span>개인정보처리방침</span>
        <span>이용약관</span>
        <span>위키 소개</span>
        <span>등 어떤 메뉴가 들어갈지는 TBD(문의채널, SNS 등)</span>
      </Container>
    </footer>
  );
};
export default Footer;
