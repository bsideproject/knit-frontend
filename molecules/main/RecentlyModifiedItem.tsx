import { DateTime } from 'luxon';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Container, Title, Date } from './RecentlyModifiedItem.styled';

interface RecentlyModifiedItemProps {
  title: ReactNode;
  modifiedDate: number;
}
export default function RecentlyModifiedItem({ title, modifiedDate }: RecentlyModifiedItemProps) {
  return (
    <Link href="#">
      <Container>
        <Title>{title}</Title>
        <Date>{DateTime.fromMillis(modifiedDate).toFormat('LL-dd HH:mm')}</Date>
      </Container>
    </Link>
  );
}
