import { FC } from 'react';
import Head from 'next/head';

import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
}

const Layout: FC<LayoutProps> = ({ title = 'Knit', children }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>

      <div id="main">{children}</div>
    </div>
  );
};
export default Layout;
