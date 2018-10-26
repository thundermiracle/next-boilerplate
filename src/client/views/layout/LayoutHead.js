import Head from 'next/head';
import PropTypes from 'prop-types';

import config from 'config/client';

const LayoutHead = (props) => {
  const { title } = props;
  return (
    <Head>
      <title>{ title.toUpperCase() || 'TOP' }</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/static/icon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/static/icon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/icon/favicon-16x16.png" />
      <link rel="manifest" href="/static/icon/site.webmanifest" />
      <link rel="mask-icon" href="/static/icon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.google}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments)};
gtag('js', new Date());gtag('config', '${config.google}');
              `,
        }}
      />
    </Head>
  );
};

LayoutHead.propTypes = {
  title: PropTypes.string,
};

LayoutHead.defaultProps = {
  title: '',
};

export default LayoutHead;
