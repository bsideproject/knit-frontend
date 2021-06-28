import useSWR from 'swr';
import router from 'next/router';
import { fetcher } from '~/utils/api';
import Section from '../Section';
import { Column } from './MostViewSection.styled';
import MostViewItem from './MostViewItem';

interface MostViewThread {
  threadId: number;
  title: string;
  contentSummary: string | null;
  likeCount: number;
  viewCount: number;
}
interface MostViewResponse {
  count: number;
  mostViewedThreads: MostViewThread[];
}

const mostViewEndpoint = 'v1/home/most/viewed' as const;

const MostViewSection = () => {
  const { data: response } = useSWR<MostViewResponse>(mostViewEndpoint, fetcher);
  const handleViewItemClicked = (threadId: number) => {
    router.push(`/thread/${threadId}`);
  };

  return (
    <Section title="최근 많이 조회된 문서">
      <Column>
        {response?.mostViewedThreads
          .filter((_, index) => index % 2 === 0)
          .map(({ threadId, title, contentSummary, viewCount, likeCount }, index) => (
            <MostViewItem
              key={threadId}
              number={index * 2 + 1}
              title={title}
              contentSummary={contentSummary}
              viewCount={viewCount}
              likeCount={likeCount}
              onClick={() => {
                handleViewItemClicked(threadId);
              }}
            />
          ))}
      </Column>
      <Column>
        {response?.mostViewedThreads
          .filter((_, index) => index % 2 === 1)
          .map(({ threadId, title, contentSummary, viewCount, likeCount }, index) => (
            <MostViewItem
              key={threadId}
              number={index * 2 + 2}
              title={title}
              contentSummary={contentSummary}
              viewCount={viewCount}
              likeCount={likeCount}
              onClick={() => {
                handleViewItemClicked(threadId);
              }}
            />
          ))}
      </Column>
    </Section>
  );
};
export default MostViewSection;
