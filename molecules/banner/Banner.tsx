import { SearchInput } from '~/atoms/fields';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>IT의 모든것 knIT</span>
        <div>
          <SearchInput size="large" />
        </div>
        <div>hashTag..</div>
      </div>
    </div>
  );
}
