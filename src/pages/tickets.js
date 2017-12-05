import React from 'react';
import config from '../../data/SiteConfig';
import { isInBrowser } from '../utils/common';
import { gaTrack } from '../utils/ga';

export default class TicketsPage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'purchase',
      eventAction: 'tickets-page-redirect',
      eventLabel: 'tickets-page-redirect',
    });
  }

  componentDidMount() {
    if (isInBrowser()) {
      window.location.href = config.ticketsUrl;
    }
  }

  render() {
    return (
      <noscript>
        <div>
          If you are not redirected automatically, follow this <a href={config.ticketsUrl}>link</a>.
        </div>
      </noscript>
    );
  }
}
