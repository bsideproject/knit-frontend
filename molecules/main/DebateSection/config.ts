import { Settings } from 'react-slick';

export const reactSlickSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  dotsClass: 'slick-dots',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 400,
      settings: {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};
