import styled from '@emotion/styled';
import Slider from 'react-slick';
import { theme } from '~/styles';

export const DebateSlider = styled(Slider)`
  width: 100%;
  height: 180px;
  border-radius: 8px !important;
  background: transparent !important;
  box-shadow: none !important;

  @media (max-width: 768px) {
    height: 120px;
  }

  .slick-slide {
    margin: 0 20px 0 0 !important; //카드 사이 간격

    @media (max-width: 768px) {
      margin: 0 8px 0 0 !important;
    }
    & > div > div {
      background: #ffffff;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
      @media (max-width: 768px) {
        height: 120px;
      }
    }
  }

  .slick-list {
    margin: 0 -80px 0 0;
    @media (max-width: 768px) {
      margin: 0 -40px;
    }
  }
  .slick-arrow {
    display: none !important;
  }
  .slick-dots {
    margin: -38px 0;

    @media (max-width: 768px) {
      margin: -26px 0;
    }
  }
  .slick-dots li {
    margin: 18px 0;
    padding: 0 3px !important;
  }
  .slick-dots li.slick-active button:before {
    color: ${theme.palette.primary} !important;
  }
`;
