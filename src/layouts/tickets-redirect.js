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

          <meta charset="utf-8" />
          <meta http-equiv="refresh" content={`1; url=${config.ticketsUrl}`} />
        </Helmet>
        <div>{ children() }</div>
      </div>
    );
  }
}
