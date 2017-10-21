import React from 'react';
import './buy-tickets-button.scss';

export default class Header extends React.Component {
  render() {
    const sendBi = () => {
      if (window.ga) {
        window.ga('send', {
          hitType: 'event',
          eventCategory: 'purchase',
          eventAction: 'click',
          eventLabel: 'Buy Tickets',
        });
      }
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
