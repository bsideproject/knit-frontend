import useSWR from 'swr';
import moment from 'dayjs';
import Link from 'next/link';
import {
  ItemContainer,
  ItemTitle,
  ItemDate,
  Container,
  Contents,
  Title,
} from './RecentlyModified.styled';

import { IRecentlyModified } from '~/@types';
import { fetcher } from '~/utils/api';

const recentChangedEndpoint = `v1/home/recent/changed`;

type RecentModifiedResponse = {
  threadId: number;
  title: string;
  modifiedDate: Date;
}[];

const RecentlyModified = () => {
  const { data: recentlyModifiedes } = useSWR<RecentModifiedResponse | null>(
    recentChangedEndpoint,
    fetcher
  );
  return (
    <Container>
      <Title>최근 변경된 문서</Title>
      <Contents>
        {recentlyModifiedes?.map(({ threadId, title, modifiedDate }) => (
          <RecentlyModifiedItem
            key={threadId}
            threadId={threadId}
            title={title}
            modifiedDate={modifiedDate}
          />
        ))}
      </Contents>
    </Container>
  );
};
export default RecentlyModified;

interface RecentlyModifiedItemProps extends IRecentlyModified {
  modifiedDate: Date;
}

const RecentlyModifiedItem = ({ threadId, title, modifiedDate }: RecentlyModifiedItemProps) => {
  return (
    <Link href={`/thread/${threadId}`}>
      <ItemContainer>
        <ItemTitle>{title}</ItemTitle>
        <ItemDate>{moment(modifiedDate).format('MM-DD HH:mm')}</ItemDate>
      </ItemContainer>
    </Link>
  );
};
