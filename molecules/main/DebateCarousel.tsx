import { Settings } from 'react-slick';
import { Debate } from '~/@types';
import { Section } from '~/atoms/layout';

import { DebateSlider, Box, BoxTitle, BoxContent, BoxComment } from './DebateCarousel.styled';
import data from './_data';

const { debate } = data;

const { Title } = Section;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  dotsClass: 'slick-dots',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function DebateCarousel() {
  return (
    <Section>
      <Title>진행중인 토론</Title>
      <div>
        <DebateSlider {...settings}>
          {debate.map(({ id, title, content, commentCount }) => {
            return (
              <DebateItem key={id} title={title} content={content} commentCount={commentCount} />
            );
          })}
        </DebateSlider>
      </div>
    </Section>
  );
}

interface DebateItemProps extends Omit<Debate, 'id'> {}

function DebateItem({ title, content, commentCount }: DebateItemProps) {
  return (
    <Box>
      <BoxTitle>{title}</BoxTitle>
      <BoxContent> {content}</BoxContent>
      <BoxComment>코멘트 {commentCount}</BoxComment>
    </Box>
  );
}
