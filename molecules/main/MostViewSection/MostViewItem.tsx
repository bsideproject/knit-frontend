import { VFC } from 'react';
import { IMostViewData } from '~/@types/db';
import {
  Container,
  Content,
  OrderNumber,
  Title,
  Desc,
  Count,
  CountGroup,
} from './MostViewItem.styled';

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
      <Content>
        <Title>{title ?? 'No titie'}</Title>
        <Desc>{contentSummary ?? 'No description'}</Desc>t{' '}
        <CountGroup>
          <Count type="view">{viewCount.toLocaleString()}</Count>
          <Count type="like">{likeCount.toLocaleString()}</Count>
        </CountGroup>
      </Content>
    </Container>
  );
};

export default MostViewItem;
