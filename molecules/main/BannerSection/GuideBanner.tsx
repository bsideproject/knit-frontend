import Link from 'next/link';
import { Container, Title, Desc } from './GuideBanner.styled';

const GuideBanner = () => {
  return (
    <Link href="https://www.notion.so/bside/Knit-82c9b647a5d74392aeaf41bf1528eabb">
      <a target="_blank">
        <Container>
          <Title>초보 사용자 가이드</Title>
          <Desc>Knit 알아보기</Desc>
        </Container>
      </a>
    </Link>
  );
};
export default GuideBanner;
