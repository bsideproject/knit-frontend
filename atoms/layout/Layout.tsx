import { FC, useEffect } from 'react';
import Head from 'next/head';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { Contents } from './Layout.styled';
import { Header } from './header';
import Footer from './footer';
import { useRootState } from '~/app/store';

interface LayoutProps {
  title?: string;
}
const Layout: FC<LayoutProps> = ({ title = 'Knit', children }) => {
  const headerHeightPx = useRootState(({ header }) => header.heightPx);

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const tagManagerArgs: TagManagerArgs = {
        gtmId: 'GTM-5DTJSC8',
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />

        <title>{title}</title>
      </Head>
      <Header />
      <Contents paddingTopPx={headerHeightPx}>{children}</Contents>
      <Footer />
    </>
  );
};
export default Layout;
