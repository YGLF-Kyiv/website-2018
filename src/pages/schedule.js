import React from 'react';
import classNames from 'classnames';
import './schedule.scss';
import { gaTrack } from '../shared/utils/ga';

import Event from '../components/Event/Event';
import EventSpeaker from '../components/EventSpeaker/EventSpeaker';

import scheduleData from '../../data/schedule.json';
import speakersData from '../../data/speakers.json';

import { constructSchedule, isInBrowser } from '../shared/utils/common';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class SchedulePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDay: SCHEDULE[0].day,
      dayOpaque: true,
      activeSpeaker: null,
      isSticky: false,
      menuHidden: false,
    };

    this.dayEls = { 24: null, 25: null };

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
    isInBrowser() && window.addEventListener('scroll', this.onWindowScroll);
  }

  componentWillUnmount() {
    isInBrowser() && window.removeEventListener('scroll', this.onWindowScroll);
  }

  getDayElTop(day) {
    return this.dayEls[day].getBoundingClientRect().top;
  }

  getLastEventTop() {
    return this.lastEventEl.getBoundingClientRect().top;
  }

  onWindowScroll() {
    const day24Position = this.getDayElTop(24);
    const day25Position = this.getDayElTop(25);
    const lastEventPosition = this.getLastEventTop();
    const activeDay = day25Position > 0 ? 24: 25;
    const isSticky = day24Position < 0;
    const menuHidden = lastEventPosition < 0;
    if (activeDay !== this.state.activeDay) {
      this.setState({ activeDay });
    }
    if (isSticky !== this.state.isSticky) {
      this.setState({ isSticky });
    }
    if (menuHidden !== this.state.menuHidden) {
      this.setState({ menuHidden });
    }
  }

  toggle(activeDay) {
    this.setState({ activeDay });
    window.scrollTo(0, window.scrollY + this.getDayElTop(activeDay));
  }

  showSpeaker(speakerData) {
    this.setState({ activeSpeaker: speakerData });
    window.document.body.style.overflow = 'hidden';
    window.document.documentElement.style.overflow = 'hidden';
  }

  hideSpeaker() {
    this.setState({ activeSpeaker: null });
    window.document.body.style.overflow = 'auto';
    window.document.documentElement.style.overflow = 'auto';
  }

  renderDaysMenu() {
    const { activeDay, isSticky, menuHidden } = this.state;
    return (
      <div className={classNames('days-menu-wrapper', { '-sticky': isSticky, '-hidden': menuHidden })}>
        <ul className="days-menu">
          { SCHEDULE.map(day => (
            <li
              className={`${activeDay === day.day ? '' : '-inactive'}`}
              key={day.title}
              onClick={this.toggle.bind(this, day.day)}
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
    return SCHEDULE.map((day) => (
      <div
        className={`day day-${day.day}`}
        key={day.title}
        ref={(el) => { this.dayEls[day.day] = el; }}
      >
        {
          day.day === 25 && (
            <div className="day-25-header">
              <h2 className="title">{ day.title }</h2>
              <p className="date">{ day.date }</p>
            </div>
          )
        }
        <div className="events">
          { day.events.map((event, index) => (
            <div ref={(el) => { if (day.day === 25 && index === day.events.length - 1) { this.lastEventEl = el; } }}>
              <Event
                day={day.day}
                data={event}
                key={index}
                onSpeakerClick={this.showSpeaker.bind(this, event.speakerData)}
              />
            </div>
          )) }
        </div>
      </div>
    ));
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
