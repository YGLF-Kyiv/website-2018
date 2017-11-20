import React from 'react';
import config from '../../../data/SiteConfig';
import Helmet from 'react-helmet';

export default class Header extends React.Component {
  render() {
    return (
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta name="description" content={config.siteDescription} />

        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content={config.siteDescription} />

        <meta
          property="og:title"
          content="You Gotta Love Frontend Conference"
        />
        <meta property="og:url" content={`http://${config.siteUrl}`} />
        <meta property="og:description" content={config.siteDescription} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`http://${config.siteUrl}/fb-share.png`}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${config.userTwitter}`} />
        <meta name="twitter:creator" content={`@${config.userTwitter}`} />
        <meta name="twitter:title" content={config.siteTitle} />
        <meta name="twitter:description" content={config.siteDescription} />
        <meta
          name="twitter:image:src"
          content={`http://${config.siteUrl}/twitter-share.png`}
        />

        <link rel="dns-prefetch" href="//use.typekit.net" />
        <link rel="dns-prefetch" href="//cdn.trackjs.com" />
        <link rel="dns-prefetch" href="//usage.trackjs.com" />

        <link rel="shortcut icon" href="64.png" />
        <link rel="icon" href="favicon.ico" />

        <script src="/libs/createjs.min.js" />

        {/*<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />*/}
      </Helmet>
    );
  }
}
