import React from 'react';
import './buy-tickets-button.scss';
import { gaTrack } from '../../utils/ga';

export default class Header extends React.Component {
  render() {
    const sendBi = () => {
      gaTrack({
        eventCategory: 'purchase',
        eventAction: 'click',
        eventLabel: 'Buy Tickets',
      });
    };
    return (
      <a
        target="_blank"
        href=""
        className="buy-tickets drop-shadow-small"
        rel="noopener noreferrer"
        onClick={sendBi}
      >
        Buy Tickets
      </a>
    );
  }
}
