import { Settings } from 'react-slick';
import { Debate } from '~/@types';
import { Section } from '~/atoms/layout';

import { DebateSlider, Box, BoxTitle, BoxContent, BoxComment } from './DebateCarousel.styled';
import data from './data';

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
          {data.map(({ id, title, content, commentCount }) => {
            return (
              <DebateComponent
                key={id}
                title={title}
                content={content}
                commentCount={commentCount}
              />
            );
          })}
        </DebateSlider>
      </div>
    </Section>
  );
}

interface DebateComponentProps extends Omit<Debate, 'id'> {}

function DebateComponent({ title, content, commentCount }: DebateComponentProps) {
  return (
    <Box>
      <BoxTitle>{title}</BoxTitle>
      <BoxContent> {content}</BoxContent>
      <BoxComment>코멘트 {commentCount}</BoxComment>
    </Box>
  );
}
