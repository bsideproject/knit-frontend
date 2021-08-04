import { VFC } from 'react';
import { IMostViewData } from '~/@types/db';
import { Container, OrderNumber, Title, Desc, Count } from './MostViewItem.styled';
import LikeIcon from '~/public/assets/icon/LikeIcon';
import ViewIcon from '~/public/assets/icon/ViewIcon';

interface MostViewProps extends Omit<IMostViewData, 'id'> {
  number: number;
  onClick?: () => void;
}

const MostViewItem: VFC<MostViewProps> = ({
  number,
  title,
  contentSummary,
  viewCount,
  likeCount,
  onClick,
}) => {
  return (
    <Container onClick={onClick}>
      <OrderNumber>{number}</OrderNumber>
      <Title>{title ?? 'No titie'}</Title>
      <Desc>{contentSummary ?? 'No description'}</Desc>
      <div>
        <Count type="view">
          <ViewIcon />
          {viewCount.toLocaleString()}
        </Count>
        <Count type="like">
          <LikeIcon />
          {likeCount.toLocaleString()}
        </Count>
      </div>
    </Container>
  );
};

export default MostViewItem;
