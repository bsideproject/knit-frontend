import { SearchInput } from '~/atoms/fields';
import { Hashtag } from '~/atoms/hashtag';
import styles from './Banner.module.scss';
import mockData from './data';

export default function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>IT의 모든것 knIT</span>
        <SearchInput className={styles.searchWrapper} placeHolder="아이폰12 디자인 가이드" />

        <div className={styles.hashtagWrapper}>
          {mockData.map(({ url, title }) => (
            <Hashtag key={url} url={url} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
}
