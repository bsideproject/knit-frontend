import { DateTime } from 'luxon';
import Link from 'next/link';
import {
  ItemContainer,
  ItemTitle,
  Date,
  Container,
  Contents,
  Title,
} from './RecentlyModified.styled';

import mockData from './_data';
import { RecentlyModified as RecentlyModifiedTypes } from '~/@types';

export default function RecentlyModified() {
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
}

interface RecentlyModifiedItemProps extends Omit<RecentlyModifiedTypes, 'id'> {
  modifiedDate: number;
}

function RecentlyModifiedItem({ title, modifiedDate }: RecentlyModifiedItemProps) {
  return (
    <Link href="#">
      <ItemContainer>
        <ItemTitle>{title}</ItemTitle>
        <Date>{DateTime.fromMillis(modifiedDate).toFormat('LL-dd HH:mm')}</Date>
      </ItemContainer>
    </Link>
  );
}
