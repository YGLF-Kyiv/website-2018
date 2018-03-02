import React from 'react';
import './schedule.scss';
import { gaTrack } from '../shared/utils/ga';

import Event from '../components/Event/Event';
import OrderedBlock from '../components/OrderedBlock/OrderedBlock';
import FitToRythm from '../components/FitToRythm/FitToRythm';

import scheduleData from '../../data/schedule.js';
import speakersData from '../../data/speakers.json';
import OrderedBlockData from '../../data/orderedBlock';

import { constructSchedule } from '../shared/utils/common';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class SchedulePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDay: SCHEDULE[0].dayId,
    };
  }

  toggle(activeDay) {
    this.setState({ activeDay });
  }

  componentWillMount() {
    gaTrack({
      eventCategory: 'schedule',
      eventAction: 'schedule',
      eventLabel: 'schedule',
    });
  }

  renderDays(schedule) {
    const { activeDay } = this.state;
    return (
      <div className="days">
        { schedule.map(day => {
          return (
            <div
              className={`day ${activeDay === day.dayId ? '' : '-inactive'}`}
              key={day.title}
              onMouseOver={this.toggle.bind(this, day.dayId)}
            >
              <FitToRythm>
                <h2 className="title">{ day.title }</h2>
                <p className="date">{ day.date }</p>
              </FitToRythm>
              <div className="events">
                { day.events.map(event => <Event data={event} key={event.eventId} />) }
              </div>
            </div>
          );
        }) }
      </div>
    );
  }

  render() {
    return (
      <div className="page-schedule lines-bg">
        <div className="container container-fluid">
          <OrderedBlock data={OrderedBlockData.schedule} />
          { this.renderDays(SCHEDULE) }
        </div>
      </div>
    );
  }
}
