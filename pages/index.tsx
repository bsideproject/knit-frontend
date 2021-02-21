import classNames from 'classnames';
import { Container } from '~/atoms/layout';
import { MostViewSection, FeaturedSection, BannerSection, ExtraSection } from '~/molecules/preview';
import { SearchBanner } from '~/molecules/banner';
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
            <BannerSection />
            <ExtraSection />
          </div>
        </div>
      </Container>
    </>
  );
}
