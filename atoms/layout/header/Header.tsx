import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHeightPx } from './Header.slice';
import { Container } from './Header.styled';
import NavigationBar from './NavigationBar';
import { HEIGHT_PX as NAVIGATION_BAR_HEIGHT_PX } from './NavigationBar.styled';
import PromotionBanner from './PromotionBanner';
import { HEIGHT_PX as PROMOTION_BANNER_HEIGHT_PX } from './PromotionBanner.styled';
import { LocalStorageKey } from '~/app/constants';

const PROMOTION_CLOSE_RETENTION_TIME_MS = 24 * 60 * 60 * 1000;

const Header: FC = () => {
  const dispatch = useDispatch();

  const [promotionBannerOpened, setPromotionBannerOpened] = useState(false);

  useEffect(() => {
    const lastCloseTime = localStorage.getItem(LocalStorageKey.PROMOTION_CLOSE_TIMESTAMP);
    if (!lastCloseTime || Date.now() > Number(lastCloseTime) + PROMOTION_CLOSE_RETENTION_TIME_MS) {
      setPromotionBannerOpened(true);
    }
  }, []);

  useEffect(() => {
    let heightPx = NAVIGATION_BAR_HEIGHT_PX;
    if (promotionBannerOpened) heightPx += PROMOTION_BANNER_HEIGHT_PX;
    dispatch(setHeightPx(heightPx));
  }, [promotionBannerOpened]);

  const handleClickClosePromotionBanner = () => {
    setPromotionBannerOpened(false);
    window.localStorage.setItem(LocalStorageKey.PROMOTION_CLOSE_TIMESTAMP, `${Date.now()}`);
  };

  return (
    <Container>
      {promotionBannerOpened && <PromotionBanner onClickClose={handleClickClosePromotionBanner} />}
      <NavigationBar />
    </Container>
  );
};

export default Header;
