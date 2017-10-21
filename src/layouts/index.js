import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import 'flexboxgrid/css/index.css';
import './index.scss';
import './fontello.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="app">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />

          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="Tel Aviv Front End Conference | October 30-31, 2017" />

          <meta property="og:title" content="You Gotta Love Frontend Conference"/>
          <meta property="og:url" content="http://yougottalovefrontend.com"/>
          <meta property="og:description"
            content="Tel Aviv Front End Conference | October 30-31, 2017"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image"
            content="http://yougottalovefrontend.com/social/share-facebook.png"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@YGLF_Conf"/>
          <meta name="twitter:creator" content="@YGLF_Conf"/>
          <meta name="twitter:title" content="You Gotta Love Frontend Conference"/>
          <meta name="twitter:description"
            content="Tel Aviv Front End Conference | October 30-31, 2017"/>
          <meta name="twitter:image:src"
            content="http://yougottalovefrontend.com/social/share-twitter.png"/>


          <link rel="dns-prefetch" href="//use.typekit.net" />
          <link rel="dns-prefetch" href="//cdn.trackjs.com" />
          <link rel="dns-prefetch" href="//usage.trackjs.com" />

          <link rel="shortcut icon" href="64.png" />
          <link rel="icon" href="favicon.ico" />

          <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville" rel="stylesheet" />
        </Helmet>
        <Header />
        <div className="body">
          {children()}
        </div>
        <Footer />
      </div>
    );
  }
}
