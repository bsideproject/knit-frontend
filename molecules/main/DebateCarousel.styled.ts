import styled from '@emotion/styled';
import Slider from 'react-slick';
import * as font from '~/styles/font';

export const DebateSlider = styled(Slider)`
  .slick-dots li.slick-active button:before {
    color: #81007f !important;
  }
`;

export const Box = styled.div`
  width: 295px;
  height: 180px;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const BoxTitle = styled.span`
  ${font.set(16, 'bold')}
  ${font.ellipse(1)}
  line-height: 36px;
  color: #000000;
`;
export const BoxContent = styled.span`
  ${font.set(13, 'normal')}
  color: #555555;
`;
export const BoxComment = styled.span`
  ${font.set(13, 'normal')}
  color: #888888;
`;
