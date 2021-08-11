import {
  Layout,
  SearchBanner,
  MostViewSection,
  FeaturedSection,
  BannerSection,
  ExtraSection,
  DebateSection,
  JobSection,
} from '~/molecules/main';
import { TopMenu } from '~/atoms/layout/topmenu';
import { Bar } from '~/atoms/layout/bar';

const { Contents, Group, Column } = Layout;

const MainPage = () => {
  return (
    <>
      <SearchBanner />
      <Contents>
        <TopMenu />
        <Group>
          <Column left>
            <MostViewSection />
            <Bar />
            <FeaturedSection />
          </Column>
          <Column right>
            <BannerSection />
            <Bar />
            <ExtraSection />
          </Column>
        </Group>
        <Group>
          <DebateSection />
        </Group>
        <Group>
          <JobSection />
        </Group>
      </Contents>
    </>
  );
};

export default MainPage;
