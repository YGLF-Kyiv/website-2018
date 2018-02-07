import React from 'react';
import config from '../../../data/SiteConfig';
import Helmet from 'react-helmet';
import { isInBrowser } from '../../shared/utils/common';

export default class Header extends React.Component {
  componentDidMount() {
    if (isInBrowser()) {
      !function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
      }(window, document, 'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2013966075486522');
      fbq('track', 'PageView');
    }
  }

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

        <meta property="fb:app_id" content={config.siteFBAppID} />
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
