import styled from '@emotion/styled';
import { Container as SideBannerContainer } from '~/atoms/banner/SideBanner';

export { Title, Desc } from '~/atoms/banner/SideBanner';

export const Container = styled(SideBannerContainer)`
  width: 100%;
  background: rgba(129, 0, 127, 0.08) url(/assets/images/guide_image.png) no-repeat right 16px
    center;
  @media only screen and (max-width: 768px) {
    border-radius: 0px;
    color: #2f2f2f;
    //background: url(commentaa.png), rgba(92, 22, 203, 0.08);
    margin-top: 42px;
    margin-bottom: 7px;
  }
`;
