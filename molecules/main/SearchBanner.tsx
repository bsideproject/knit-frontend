import { Hashtag } from '~/atoms/hashtag';
import styles from './SearchBanner.module.scss';
import mockData from './_data';
import { SearchInputStyled } from './SearchBanner.styled';

const SearchBanner = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>IT의 모든것 knIT</span>
        <SearchInputStyled placeHolder="아이폰12 디자인 가이드" />

        <div className={styles.hashtagWrapper}>
          {mockData.searchBanner.map(({ url, title }) => (
            <Hashtag key={url} url={url} title={title} colorMode="dark" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SearchBanner;
