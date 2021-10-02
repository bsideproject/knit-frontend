import React, { FC } from 'react';
import { Color } from '~/@types';
import { Button } from '~/atoms/button';
import { Content } from './LikeButtonContent.styled';
import axios from '~/utils/api';

interface LikeButtonContentProps {
  id: number;
  likeCount?: number;
}

const LikeEndPoint = `v1/threads/like`;

const LikeButtonContent: FC<LikeButtonContentProps> = ({ id, likeCount = 0 }) => {
  const handleLikeButtonClicked = async () => {
    const response = await axios.post(LikeEndPoint, { threadId: id });
  };
  return (
    <Content>
      내용이 도움 되었다면
      <Button color={Color.PRIMARY} onClick={handleLikeButtonClicked}>
        👍 {likeCount}
      </Button>
    </Content>
  );
};
export default LikeButtonContent;
