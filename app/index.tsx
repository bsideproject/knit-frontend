import type { AppProps } from 'next/app';
import { wrapper } from './store';
import { Layout, Header } from '~/atoms/layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(App);
