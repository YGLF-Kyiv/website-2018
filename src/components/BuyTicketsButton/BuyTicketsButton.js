import React from 'react';
import './buy-tickets-button.scss';
import { gaTrack } from '../../utils/ga';
import config from '../../../data/SiteConfig';

export default class BuyTicketsButton extends React.Component {
  trackClick() {
    gaTrack({
      eventCategory: 'purchase',
      eventAction: 'click',
      eventLabel: 'Buy Tickets',
    });
  }

  render() {
    return (
      <a
        target="_blank"
        href={config.ticketsUrl}
        className="buy-tickets drop-shadow-small"
        rel="noopener noreferrer"
        onClick={this.trackClick}
      >
        Buy Tickets
      </a>
    );
  }
}
