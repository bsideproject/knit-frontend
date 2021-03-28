import styled from '@emotion/styled';
import { Button } from '~/atoms/button';
import * as font from '~/styles/font';

export const FeaturedSectionButton = styled(Button)`
  position: absolute;
  right: 30px;
  bottom: 20px;
`;

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 200px;

  display: flex;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

export const Contents = styled.div`
  position: relative;

  padding: 30px;
  padding-bottom: 20px;

  flex: 1 1 0;
`;

export const Thumbnail = styled.div`
  width: 200px;
  height: 200px;
`;

export const Title = styled.span`
  margin-bottom: 14px;
  display: block;
  ${font.set(18)}
`;

export const Desc = styled.span`
  ${font.set(16)}
  ${font.ellipse(3)}
  color: #909090;
`;
