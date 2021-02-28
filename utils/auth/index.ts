import { SigninType } from '~/@types/auth';

const SDK_URL: Record<SigninType, string> = {
  [SigninType.NAVER]: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js',
  [SigninType.GOOGLE]: '',
};

export function injectSigninSDK(type: SigninType) {
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
}
