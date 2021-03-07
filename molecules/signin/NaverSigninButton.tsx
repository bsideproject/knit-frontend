import { FC, useEffect } from 'react';
import { initNaverSigninSDK } from '~/utils/auth';

const NaverSigninButton: FC = () => {
  useEffect(() => {
    initNaverSigninSDK();
  }, []);

  return <div id="naverIdLogin" />;
};

export default NaverSigninButton;
