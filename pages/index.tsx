import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import {
  Layout,
  SearchHeaderSection,
  SearchBanner,
  MostViewSection,
  FeaturedSection,
  BannerSection,
  ExtraSection,
  DebateSection,
  JobSection,
} from '~/molecules/main';
import { TopMenu, InnerTab } from '~/atoms/layout';
import { Bar } from '~/atoms/layout/bar';

const { Contents, Group, Column } = Layout;

function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);

  const listener = () => {
    setScrollY(window.pageYOffset);
  };

  const delay = 10;
  useEffect(() => {
    window.addEventListener('scroll', debounce(listener, delay));
    return () => window.removeEventListener('scroll', listener);
  });

  return {
    scrollY,
  };
}

const MainPage = () => {
  const { scrollY } = useScroll();
  const [menuCategory, setMenuCategory] = useState<string>('홈');

  return (
    <>
      <SearchHeaderSection scroll={scrollY} />
      <SearchBanner scroll={scrollY} />
      <Contents>
        <TopMenu scroll={scrollY} setMenuCategory={setMenuCategory} />
        {menuCategory && menuCategory === '홈' && (
          <>
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
          </>
        )}
        {menuCategory && menuCategory !== '홈' && (
          <>
            <InnerTab />
            <Group>
              <JobSection menuCategory={menuCategory} />
            </Group>
          </>
        )}
      </Contents>
    </>
  );
};

export default MainPage;
