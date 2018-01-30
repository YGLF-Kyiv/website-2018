import React from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import './tickets-redirect.scss';

export default class TicketsRedirectLayout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="tickets-redirect">
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
          <meta property="og:title" content={config.siteDescription} />
          <meta property="og:url" content={config.website} />
          <meta property="og:description" content={config.siteDescription} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={`@${config.userTwitter}`} />
          <meta name="twitter:creator" content={`@${config.userTwitter}`} />
          <meta name="twitter:title" content={config.twitterTitle} />
          <meta name="twitter:description" content={config.siteDescription} />

          <meta charset="utf-8" />
          <meta http-equiv="refresh" content={`1; url=${config.ticketsUrl}`} />
        </Helmet>
        <div>{ children() }</div>
      </div>
    );
  }
}
