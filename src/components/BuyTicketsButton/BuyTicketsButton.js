import React, { PropTypes as toBe } from 'react';
import './buy-tickets-button.scss';
import { gaTrack } from '../../shared/utils/ga';
import config from '../../../data/SiteConfig';

export default class BuyTicketsButton extends React.Component {
  static propTypes = {
    href: toBe.string,
    eventLabel: toBe.string,
    eventCategory: toBe.string,
    text: toBe.string,
  };

  static defaultProps = {
    href: config.ticketsUrl,
    eventLabel: 'Buy Tickets',
    eventCategory: 'purchase',
    text: 'Buy Tickets',
  };

  constructor() {
    super();
    this.trackClick = this.trackClick.bind(this);
  }

  trackClick() {
    const { eventCategory, eventLabel } = this.props;
    gaTrack({
      eventCategory,
      eventAction: 'click',
      eventLabel,
    });
  }

  render() {
    const { href, text } = this.props;
    return (
      <a
        target="_blank"
        href={href}
        className="buy-tickets drop-shadow-small"
        rel="noopener noreferrer"
        onClick={this.trackClick}
      >
        { text }
      </a>
    );
  }
}
