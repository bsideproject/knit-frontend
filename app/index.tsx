import type { AppProps } from 'next/app';
import { wrapper } from './store';
import { Dialog } from '~/features/dialog';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Dialog />
    </>
  );
}

export default wrapper.withRedux(App);
