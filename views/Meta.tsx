import Head from 'next/head';

interface Props {
  title: string;
  description: string;
}

export default ({ title, description }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="apple-mobile-web-app-title" content="Slater and Gordon Lawyers UK" />
    <meta name="application-name" content="Slater and Gordon Lawyers UK" />
    <meta name="theme-color" content="#314747" />
    <meta name="format-detection" content="telephone=no" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:image" content="/images/meta-image.png" />
    <meta name="twitter:description" content={description} />

    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/images/meta-image.png" />
    <meta property="og:url" content="" />
    <meta property="og:type" content="website" />

    <link rel="canonical" href="" />
    <link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="/favicons/favicon-48x48.png" sizes="48x48" />
    <link rel="icon" type="image/png" href="/favicons/favicon-128x128.png" sizes="128x128" />
    <link rel="icon" type="image/png" href="/favicons/favicon-152x152.png" sizes="152x152" />
    <link rel="icon" type="image/png" href="/favicons/favicon-167x167.png" sizes="167x167" />
    <link rel="icon" type="image/png" href="/favicons/favicon-180x180.png" sizes="180x180" />
    <link rel="icon" type="image/png" href="/favicons/favicon-192x192.png" sizes="192x192" />
    <link rel="icon" type="image/png" href="/favicons/favicon-512x512.png" sizes="512x512" />
  </Head>
);
