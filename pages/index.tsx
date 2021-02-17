import classNames from 'classnames';
import { Container } from '~/atoms/layout';
import { MostViewSection, FeaturedSection } from '~/molecules/preview';
import { Banner } from '~/molecules/banner';
import styles from './index.module.scss';

export default function MainPage() {
  return (
    <>
      <Banner />
      <Container className={styles.contents}>
        <div className={styles.mostViewWrapper}>
          <div className={classNames(styles.column, styles.left)}>
            <MostViewSection />
            <FeaturedSection />
          </div>
          <div className={classNames(styles.column, styles.right)}>
            가이드 배너 들어가야하는 위치
          </div>
        </div>
      </Container>
    </>
  );
}
