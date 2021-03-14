import { FC, useEffect } from 'react';
import { initGoogleSigninSDK } from '~/utils/auth';

const GoogleSigninButton: FC = () => {
  useEffect(() => {
    initGoogleSigninSDK();
  }, []);

  return <div id="googleIdLogin" />;
};

export default GoogleSigninButton;
