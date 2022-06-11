import React from 'react';
import Head from 'next/head';
import { useAdminPanel } from 'src/modules/admin-panel/hooks/AdminPanelProvider';

type MetaProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
  timestamp?: string;
};

export function Meta(_props: MetaProps) {
  const { settings } = useAdminPanel();
  const title = settings?.title;
  const faviconUrl = settings?.faviconUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      {faviconUrl && <link rel="icon" type="image/png" href={faviconUrl} />}
      {faviconUrl && <meta property="og:image" content={faviconUrl} key="ogimage" />}
      {faviconUrl && <meta name="twitter:image" content={faviconUrl} key="twitterimage" />}
    </Head>
  );
}
