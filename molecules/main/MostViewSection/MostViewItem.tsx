import { VFC } from 'react';
import { IMostViewData } from '~/@types/db';
import { Container, OrderNumber, Title, Desc, Count } from './MostViewItem.styled';

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
        <Count type="view">{viewCount.toLocaleString()}</Count>
        <Count type="like">{likeCount.toLocaleString()}</Count>
      </div>
    </Container>
  );
};

export default MostViewItem;
