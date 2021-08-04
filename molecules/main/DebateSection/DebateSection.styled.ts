import styled from '@emotion/styled';
import Slider from 'react-slick';
import { theme } from '~/styles';

export const DebateSlider = styled(Slider)`
  width: 100%;
  .slick-dots li.slick-active button:before {
    color: ${theme.palette.primary} !important;
  }
`;
