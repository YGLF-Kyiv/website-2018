import React from 'react';
import classNames from 'classnames';
import './schedule.scss';
import { gaTrack } from '../shared/utils/ga';

import Event from '../components/Event/Event';
import EventSpeaker from '../components/EventSpeaker/EventSpeaker';

import scheduleData from '../../data/schedule.js';
import speakersData from '../../data/speakers.json';

import { constructSchedule, isInBrowser } from '../shared/utils/common';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class SchedulePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDay: SCHEDULE[0],
      dayOpaque: true,
      activeSpeaker: null,
      isSticky: false,
    };

    this.showDay = this.showDay.bind(this);
    this.hideSpeaker = this.hideSpeaker.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.getDayElTop = this.getDayElTop.bind(this);
  }

  componentWillMount() {
    gaTrack({
      eventCategory: 'schedule',
      eventAction: 'schedule',
      eventLabel: 'schedule',
    });
  }

  componentDidMount() {
    this.showDay();
    isInBrowser() && window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    isInBrowser() && window.removeEventListener('scroll', this.onWindowScroll);
  }

  getDayElTop() {
    return this.dayEl.getBoundingClientRect().top;
  }

  onWindowScroll() {
    const elementPosition = this.getDayElTop();
    this.setState({ isSticky: elementPosition < 0 });
  }

  showDay() {
    setTimeout(() => {
      this.setState({ dayOpaque: false });
    }, 100);
  }

  toggle(activeDay) {
    this.setState({ activeDay, dayOpaque: true }, this.showDay);
    window.scrollTo(0, window.scrollY + this.getDayElTop());
  }

  showSpeaker(speakerData) {
    this.setState({ activeSpeaker: speakerData });
    window.document.body.style.overflow = 'hidden';
  }

  hideSpeaker() {
    this.setState({ activeSpeaker: null });
    window.document.body.style.overflow = 'auto';
  }

  renderDaysMenu() {
    const { activeDay, isSticky } = this.state;
    return (
      <div className={classNames('days-menu-wrapper', { '-sticky': isSticky })}>
        <ul className="days-menu">
          { SCHEDULE.map(day => (
            <li
              className={`${activeDay === day ? '' : '-inactive'}`}
              key={day.title}
              onClick={this.toggle.bind(this, day)}
            >
              <h2 className="title">{ day.title }</h2>
              <p className="date">{ day.date }</p>
            </li>
          )) }
        </ul>
      </div>
    );
  }

  renderDays() {
    const { activeDay, dayOpaque } = this.state;
    return (
      <div
        className={`day ${dayOpaque ? '-opaque' : ''}`}
        key={activeDay.title}
        ref={(el) => { this.dayEl = el; }}
      >
        <div className="events">
          { activeDay.events.map((event, key) => (
            <Event
              day={activeDay.day}
              data={event}
              key={key}
              onSpeakerClick={this.showSpeaker.bind(this, event.speakerData)}
            />
          )) }
        </div>
      </div>
    );
  }

  renderActiveSpeaker() {
    const { activeSpeaker } = this.state;
    return activeSpeaker
      ? <EventSpeaker data={activeSpeaker} onOverlayClick={this.hideSpeaker} />
      : null;
  }

  render() {
    return (
      <div className="page-schedule lines-bg">
        <div className="container container-fluid">
          <h2>Schedule</h2>
          { this.renderDaysMenu() }
          { this.renderDays() }
          { this.renderActiveSpeaker() }
        </div>
      </div>
    );
  }
}
