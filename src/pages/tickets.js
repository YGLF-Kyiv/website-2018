import React from 'react';
import config from '../../data/SiteConfig';
import { isInBrowser } from '../shared/utils/common';
import { ticketsWidget } from '../shared/utils/2event';
import { gaTrack } from '../shared/utils/ga';
import './tickets.scss';

export default class TicketsPage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'purchase',
      eventAction: 'tickets-page-visit',
      eventLabel: 'tickets-page-visit',
    });
  }

  componentDidMount() {
    ticketsWidget();
  }

  render() {
    return (
      <div className="bg lines-bg">
        <div className="container-fluid">
          <div className="tickets">
            <div className="promo-tickets" id="2event_tickets_widget"></div>
          </div>
        </div>
      </div>
    );
  }
}
