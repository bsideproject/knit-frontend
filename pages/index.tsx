import classNames from 'classnames';

import { Container } from '~/atoms/layout';
import { MostViewSection, FeaturedSection } from '~/molecules/preview';
import { SearchBanner, GuideBanner } from '~/molecules/banner';
import { DebateCarousel } from '~/molecules/debate';
import styles from './index.module.scss';

export default function MainPage() {
  return (
    <>
      <SearchBanner />
      <Container className={styles.contents}>
        <div className={styles.mostViewWrapper}>
          <div className={classNames(styles.column, styles.left)}>
            <MostViewSection />
            <FeaturedSection />
          </div>
          <div className={classNames(styles.column, styles.right)}>
            <GuideBanner />
          </div>
        </div>
        <div className={styles.DebateCarouselWrapper}>
          <DebateCarousel />
        </div>
      </Container>
    </>
  );
}
