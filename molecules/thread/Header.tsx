import { FC } from 'react';
import { Container, Aligner, Category, Title, CreatedDate, Tasks, Task } from './Header.styled';

const Header: FC = () => {
  return (
    <Container>
      <Aligner>
        <Category>
          개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발
          디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발
          디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발
          디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발
          디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발 디자인 기획 개발
          디자인 기획 개발 디자인 기획
        </Category>
        <Title>
          타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀
          타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀
          타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀 타이틀
        </Title>
        <CreatedDate>2021.12.12 23:59 작성된 문서</CreatedDate>
        <Tasks>
          <Task href="#">편집</Task>
          <Task href="#">토론</Task>
          <Task href="#">히스토리</Task>
        </Tasks>
      </Aligner>
    </Container>
  );
};

export default Header;
