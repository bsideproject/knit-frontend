import {
  Layout,
  SearchBanner,
  MostViewSection,
  FeaturedSection,
  BannerSection,
  ExtraSection,
  DebateSection,
} from '~/molecules/main';

const { Contents, Group, Column } = Layout;

const MainPage = () => {
  return (
    <>
      <SearchBanner />
      <Contents>
        <Group>
          <Column left>
            <MostViewSection />
            <FeaturedSection />
          </Column>
          <Column right>
            <BannerSection />
            <ExtraSection />
          </Column>
        </Group>
        <Group>
          <DebateSection />
        </Group>
      </Contents>
    </>
  );
};

export default MainPage;
