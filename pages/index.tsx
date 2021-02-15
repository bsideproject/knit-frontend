import classNames from 'classnames';
import { Container } from '~/atoms/layout';
import { MostView } from '~/molecules/preview';
import { Banner } from '~/molecules/banner';
import styles from './index.module.scss';
import { Featured } from '~/molecules/featured';

export default function MainPage() {
  return (
    <>
      <Banner />
      <Container className={styles.main}>
        <div className={styles.mostViewWrapper}>
          <MostView styles={styles} />
          <div className={classNames(styles.column, styles.right)}>
            가이드 배너 들어가야하는 위치
          </div>
        </div>
        <Featured />
      </Container>
    </>
  );
}
