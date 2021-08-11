import styled from '@emotion/styled';
import { Container as SideBannerContainer } from '~/atoms/banner/SideBanner';

export { Title, Desc } from '~/atoms/banner/SideBanner';

export const Container = styled(SideBannerContainer)`
  width: 100%;
  background: rgba(129, 0, 127, 0.08) url(/assets/images/guide_image.png) no-repeat right 16px
    center;
  background-size: contain;
  @media (max-width: 768px) {
    border-radius: 0px;
    color: #2f2f2f;
    margin-top: 42px;
    margin-bottom: 7px;
  }
`;
