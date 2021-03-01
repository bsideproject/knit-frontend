import { FC, useEffect } from 'react';
import { SigninType } from '~/@types/auth';
import { injectSigninSDK } from '~/utils/auth';

const NaverSigninButton: FC = () => {
  useEffect(() => {
    injectNaverSigninSDK();
  }, []);

  return <div id="naverIdLogin" />;
};

export default NaverSigninButton;

async function injectNaverSigninSDK() {
  await injectSigninSDK(SigninType.NAVER);

  const naverLogin = new (window as any).naver.LoginWithNaverId({
    clientId: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID_NAVER,
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/signin/callback/${SigninType.NAVER}`,
    isPopup: false,
    loginButton: { color: 'white', type: 3, height: 50 },
  });
  naverLogin.init();
}
