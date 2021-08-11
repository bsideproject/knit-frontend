import styled from '@emotion/styled';
import { Button } from '~/atoms/button';
import * as font from '~/styles/font';

export const FeaturedSectionButton = styled(Button)`
  border-radius: 8px;
  margin-top: 15px;
  align-self: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 20px 20px 30px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  @media (max-width: 768px) {
    margin: 16px;
  }
`;

export const Contents = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  margin-right: 26px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: 8px;
  }
`;

export const Title = styled.div`
  margin-bottom: 14px;
  display: block;
  ${font.set(16, 'bold')}
  color: #2F2F2F;
  @media (max-width: 768px) {
    ${font.set(14, 'bold')}
  }
`;

export const Desc = styled.div`
  ${font.set(14)}
  ${font.ellipse(5)}
  color: #505055;
  @media (max-width: 768px) {
    ${font.ellipse(3)}
    line-height: 19px;
    margin-right: 8px;
  }
`;

export const Thumbnail = styled.div`
  width: 200px;
  height: 200px;
  background-size: cover;
  background: url(/assets/images/featured_image.png) no-repeat center center;
  @media (max-width: 768px) {
    //TODO: 사이즈 조정필요
    width: 104px;
    height: 104px;
  }
`;
