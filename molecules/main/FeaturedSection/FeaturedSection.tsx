import Section from '../Section';
import { Color, Size } from '~/@types';
import {
  FeaturedSectionButton,
  Container,
  Contents,
  Thumbnail,
  Title,
  Desc,
} from './FeaturedSection.styled';

// mocking
const hasThumbnail = false;

const FeaturedSection = () => {
  return (
    <Section title="Featured">
      <Container>
        <Contents>
          <Title>효율적인 업무를 위한 협업툴</Title>
          <Desc>
            Document description here. 문서들 중, 퀄리티가 우수하다고 판단되는 콘텐츠를 선정하여
            여기에서 그 내용을 접할 수 있도록 밖으로 꺼내서 보여주는 영역입니다. 몇 줄 까지
            보여주고, 이후의 내용은 우측 하단의 [이어서 읽기] 버튼을 눌러서 볼 수 있습니다. 대표
            이미지가 포함된 문서와, 이미지가 포함되지 않은 경우가 필요합니다. 3줄까지 보여주기
          </Desc>
          <FeaturedSectionButton color={Color.PRIMARY} size={Size.MIDDLE}>
            이어서 읽기
          </FeaturedSectionButton>
        </Contents>
        {hasThumbnail && (
          <Thumbnail>
            <img src="" alt="" />
          </Thumbnail>
        )}
      </Container>
    </Section>
  );
};

export default FeaturedSection;
