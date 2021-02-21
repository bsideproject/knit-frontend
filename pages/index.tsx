import classNames from 'classnames';
import { Container } from '~/atoms/layout';
import {
  SearchBanner,
  MostViewSection,
  FeaturedSection,
  BannerSection,
  ExtraSection,
} from '~/molecules/main';
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
