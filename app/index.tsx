import type { AppProps } from 'next/app';
import { wrapper } from './store';
import { Layout } from '~/features/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(App);
