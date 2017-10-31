import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import 'flexboxgrid/css/index.css';
import './index.scss';
import './fontello.css';
import Header from '../components/Header/Header';
import HeaderMenu from '../components/HeaderMenu/HeaderMenu';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
  render() {
    const { children, location: { pathname } } = this.props;
    return (
      <div className="app">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />

          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
          <meta name="description" content={config.siteDescription} />

          <meta property="og:title" content="You Gotta Love Frontend Conference" />
          <meta property="og:url" content={`http://${config.siteUrl}`} />
          <meta property="og:description" content={config.siteDescription} />
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={`http://${config.siteUrl}/fb-share.png`} />

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content={`@${config.userTwitter}`} />
          <meta name="twitter:creator" content={`@${config.userTwitter}`} />
          <meta name="twitter:title" content={config.siteTitle} />
          <meta name="twitter:description" content={config.siteDescription} />
          <meta name="twitter:image:src" content={`http://${config.siteUrl}/twitter-share.png`} />

          <link rel="dns-prefetch" href="//use.typekit.net" />
          <link rel="dns-prefetch" href="//cdn.trackjs.com" />
          <link rel="dns-prefetch" href="//usage.trackjs.com" />

          <link rel="shortcut icon" href="64.png" />
          <link rel="icon" href="favicon.ico" />

          <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
        </Helmet>
        {/*<HeaderMenu />*/}
        <Header />
        <div className="body">
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
}
