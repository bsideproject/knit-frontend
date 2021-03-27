import { VFC } from 'react';
import { IMostViewData } from '~/@types/db';
import { Container, OrderNumber, Title, Desc, Count } from './MostViewItem.styled';

interface MostViewProps extends Omit<IMostViewData, 'id'> {
  number: number;
}

const MostViewItem: VFC<MostViewProps> = ({ number, title, desc, viewCount, likeCount }) => {
  return (
    <Container>
      <OrderNumber>{number}</OrderNumber>
      <Title>{title}</Title>
      <Desc>{desc}</Desc>
      <div>
        <Count type="view">{viewCount.toLocaleString()}</Count>
        <Count type="like">{likeCount.toLocaleString()}</Count>
      </div>
    </Container>
  );
};

export default MostViewItem;
