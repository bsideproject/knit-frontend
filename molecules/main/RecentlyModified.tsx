import { DateTime } from 'luxon';
import Link from 'next/link';
import {
  ItemContainer,
  ItemTitle,
  ItemDate,
  Container,
  Contents,
  Title,
} from './RecentlyModified.styled';

import mockData from './_data';
import { IRecentlyModified } from '~/@types';

const RecentlyModified = () => {
  return (
    <Container>
      <Title>최근 변경된 문서</Title>
      <Contents>
        {mockData.recentlyModified.map(({ id, title, modifiedDate }) => (
          <RecentlyModifiedItem key={id} title={title} modifiedDate={modifiedDate} />
        ))}
      </Contents>
    </Container>
  );
};
export default RecentlyModified;

interface RecentlyModifiedItemProps extends Omit<IRecentlyModified, 'id'> {
  modifiedDate: number;
}

const RecentlyModifiedItem = ({ title, modifiedDate }: RecentlyModifiedItemProps) => {
  return (
    <Link href="#">
      <ItemContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDate>{DateTime.fromMillis(modifiedDate).toFormat('LL-dd HH:mm')}</ItemDate>
      </ItemContainer>
    </Link>
  );
};
