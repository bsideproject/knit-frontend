import { useRouter } from 'next/router';
import useSWR from 'swr';
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
import { fetcher } from '~/utils/api';

// mocking
const hasThumbnail = false;

const featuredEndpoint = 'v1/home/featured';

type FeaturedReponse = {
  threadId: number;
  title: string;
  content: string;
};

const FeaturedSection = () => {
  const { data: featured } = useSWR<FeaturedReponse | null | undefined>(featuredEndpoint, fetcher);

  const router = useRouter();

  const handleButtonClicked = () => {
    router.push(`/thread/${featured?.threadId}`);
  };

  if (!featured) {
    return null;
  }
  return (
    <Section title="Featured">
      <Container>
        <Contents>
          <Title>{featured.title}</Title>
          <Desc>{featured.content}</Desc>
          <FeaturedSectionButton
            color={Color.PRIMARY}
            size={Size.MIDDLE}
            onClick={handleButtonClicked}
          >
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
