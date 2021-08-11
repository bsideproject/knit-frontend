import Section from '../Section';
import {
  Container,
  Contents,
  Thumbnail,
  Title,
  HashTags,
  Count,
  CountGroup,
  BottomGroup,
  Date,
  JobTag,
} from './JobSection.styled';

// mocking

const JobSection = () => {
  return (
    <Section>
      <Container>
        <Contents>
          <Thumbnail>
            <img src="" alt="" />
          </Thumbnail>
          <JobTag>디자인</JobTag>
          <Title>포트폴리오는 어떻게 만들어야 할까? 사진 없을때</Title>
          <HashTags> #여기에 #키워드 #디자인 #가이드 #앱</HashTags>
        </Contents>
        <BottomGroup>
          <CountGroup>
            <Count type="view">200</Count>
            <Count type="like">100</Count>
          </CountGroup>
          <Date>21.01.31.</Date>
        </BottomGroup>
      </Container>
    </Section>
  );
};

export default JobSection;
