import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setHeightPx } from './Header.slice';
import { Container } from './Header.styled';
import NavigationBar from './NavigationBar';
import { HEIGHT_PX as NAVIGATION_BAR_HEIGHT_PX } from './NavigationBar.styled';
import PromotionBanner from './PromotionBanner';
import { HEIGHT_PX as PROMOTION_BANNER_HEIGHT_PX } from './PromotionBanner.styled';

const Header: FC = () => {
  const dispatch = useDispatch();
  const [promotionBannerOpened, setPromotionBannerOpened] = useState(() => {
    /**
     * TODO
     * - 프로모션 배너 '24시간 동안 보지 않기' 여부 로컬스토리지에 저장
     * - 로컬스토리지에 저장된 값 확인해서 24시간이 아직 안지났으면 false
     */
    return true;
  });

  useEffect(() => {
    let heightPx = NAVIGATION_BAR_HEIGHT_PX;
    if (promotionBannerOpened) heightPx += PROMOTION_BANNER_HEIGHT_PX;
    dispatch(setHeightPx(heightPx));
  }, [promotionBannerOpened]);

  return (
    <Container>
      {promotionBannerOpened && (
        <PromotionBanner onClickClose={() => setPromotionBannerOpened(false)} />
      )}
      <NavigationBar />
    </Container>
  );
};

export default Header;
