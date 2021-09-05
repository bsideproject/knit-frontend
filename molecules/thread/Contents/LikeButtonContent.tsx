import React, { FC } from 'react';
import { Color } from '~/@types';
import { Button } from '~/atoms/button';
import { Content } from './LikeButtonContent.styled';

const LikeButtonContent: FC = () => {
  return (
    <Content>
      내용이 도움 되었다면
      <Button color={Color.PRIMARY}>👍 1,000</Button>
    </Content>
  );
};
export default LikeButtonContent;
