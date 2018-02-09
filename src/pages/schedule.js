import React from 'react';
import './speakers.scss';
import { gaTrack } from '../shared/utils/ga';

import Event from '../components/Event/Event';

import speakersData from '../../data/speakers.json';
import scheduleData from '../../data/schedule.js';
import eventsOrderData from '../../data/eventsOrder.js';

export default class SchedulePage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'schedule',
      eventAction: 'schedule',
      eventLabel: 'schedule',
    });
  }

  render() {
    return (
      <div className="page-schedule lines-bg">
        <div className="container container-fluid">
          <h2>Meet Our Speakers</h2>
        </div>
        <div className="events">
          { scheduleData.days[0].events.map((item) => { // TODO: daysComponent, loop нормального человека
            const eventData = item; // TODO: construct item from speakersData & scheduleData, filter by eventsOrderData
            return (
              <Event data={eventData} />
            );
          })}
        </div>
      </div>
    );
  }
}
