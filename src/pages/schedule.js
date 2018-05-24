import React from 'react';
import classNames from 'classnames';

import './schedule.scss';
import { gaTrack } from '../shared/utils/ga';

import Event from '../components/Event/Event';
import EventSpeaker from '../components/EventSpeaker/EventSpeaker';

import scheduleData from '../../data/schedule.json';
import speakersData from '../../data/speakers.json';

import {
  constructSchedule,
  getCurrentEvent,
  isInBrowser,
  getToday,
  getNextEvent,
  getActiveDay,
  isEventDay,
  nextUpdatesIn
} from '../shared/utils/common';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class SchedulePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeDay: getActiveDay(),
      dayOpaque: true,
      activeSpeaker: null,
      isSticky: false,
      menuHidden: false,
      currentEvent: getCurrentEvent(SCHEDULE)
    };

    this.dayEls = { 24: null, 25: null };

    if (isEventDay()) {
      nextUpdatesIn(SCHEDULE).forEach(eventTime => {
        setTimeout(this.updateCurrentEventState.bind(this), eventTime);
      });
    }

    this.hideSpeaker = this.hideSpeaker.bind(this);
    this.onWindowScroll = this.onWindowScroll.bind(this);
    this.getDayElTop = this.getDayElTop.bind(this);
    this.scrollToActiveDay = this.scrollToActiveDay.bind(this);
    this.scrollToActiveEvent = this.scrollToActiveEvent.bind(this);
    this.updateCurrentEventState = this.updateCurrentEventState.bind(this);
  }

  componentWillMount() {
    gaTrack({
      eventCategory: 'schedule',
      eventAction: 'schedule',
      eventLabel: 'schedule',
    });
  }

  componentDidMount() {
    const shouldBeScrolled = isInBrowser() && !window.location.hash.substr(1) && isEventDay();

    isInBrowser() && window.addEventListener('scroll', this.onWindowScroll);

    if (shouldBeScrolled && !this.state.currentEvent) {
      setTimeout(this.scrollToActiveDay, 100);
    } else if (shouldBeScrolled && this.state.currentEvent) {
      setTimeout(this.scrollToActiveEvent, 100);
    }
  }

  componentWillUnmount() {
    isInBrowser() && window.removeEventListener('scroll', this.onWindowScroll);
  }

  updateCurrentEventState() {
    this.setState({
      currentEvent: getCurrentEvent(SCHEDULE)
    });
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
    this.setState({ activeDay }, this.scrollToActiveDay);
  }

  scrollToActiveDay() {
    window.scrollTo(0, window.scrollY + this.getDayElTop(this.state.activeDay));
  }

  scrollToActiveEvent() {
    const { anchor } = getCurrentEvent(SCHEDULE);

    const top = document
      .querySelector(`[data-anchor="${anchor}"]`)
      .getBoundingClientRect().top;

      window.scrollTo(0, window.scrollY + top - 90);
  }

  showSpeaker(speakerData) {
    this.setState({ activeSpeaker: speakerData });
    window.document.documentElement.style.overflow = 'hidden';
  }

  hideSpeaker() {
    this.setState({ activeSpeaker: null });
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
          { day.events.map((event, index) => {
            const isCurrent = this.state.currentEvent && (event.id === this.state.currentEvent.id);

            return (
              <div className={classNames("event-holder", { "-isCurrent": isCurrent })}
                key={index}
                ref={(el) => {
                  if (day.day === 25 && index === day.events.length - 1) {
                    this.lastEventEl = el;
                  }
                }}
              >
                <Event
                  day={day.day}
                  data={event}
                  key={index}
                  onSpeakerClick={this.showSpeaker.bind(this, event.speakerData)}
                />
              </div>
            )
          }) }
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
