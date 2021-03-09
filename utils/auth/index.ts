import { SigninType } from '~/@types/auth';

const SDK_URL: Record<SigninType, string> = {
  [SigninType.NAVER]: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js',
  [SigninType.GOOGLE]: '',
};

const injectSigninSDK = (type: SigninType) => {
  const id = `${type}_SDK`;
  if (document.getElementById(id)) return Promise.resolve();

  const scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = SDK_URL[type];
  scriptElement.id = id;
  document.head.appendChild(scriptElement);

  return new Promise((resolve) => {
    scriptElement.onload = resolve;
  });
};

export const initNaverSigninSDK = async ({
  callbackHandle = false,
}: { callbackHandle?: boolean } = {}) => {
  await injectSigninSDK(SigninType.NAVER);

  const naverLogin = new (window as any).naver.LoginWithNaverId({
    clientId: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID_NAVER,
    callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/signin/callback/${SigninType.NAVER}`,
    isPopup: false,
    ...(callbackHandle
      ? { callbackHandle: true }
      : { loginButton: { color: 'white', type: 3, height: 50 } }),
  });
  naverLogin.init();
  return naverLogin;
};
