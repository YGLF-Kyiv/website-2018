import React from 'react';
import { DateTime } from 'luxon';
import classNames from 'classnames';

import scheduleData from './../../../data/schedule.json';
import speakersData from './../../../data/speakers.json';

import {
  constructSchedule,
  getCurrentEvents,
  getCurrentMinutes,
  toMinutes,
  isInBrowser,
  isEventDay,
  nextUpdatesIn,
  getToday
} from '../../shared/utils/common';

import './current-event.scss';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class CurrentEvent extends React.Component {

  constructor() {
    super();

    this.state = {
      currentEvents: getCurrentEvents(SCHEDULE)
    }

    this.updateCurrentEventsState = this.updateCurrentEventsState.bind(this);

    if (isEventDay()) {
      nextUpdatesIn(SCHEDULE).forEach(eventTime => {
        setTimeout(this.updateCurrentEventsState.bind(this), eventTime);
      });
    }
  }

  updateCurrentEventsState() {
    this.setState({
      currentEvents: getCurrentEvents(SCHEDULE)
    });
  }

  navigateToEvent(anchor) {
    if (this.isSchedulePage()) {
      location.hash = `#${anchor}`;

      const top = document
        .querySelector(`[data-anchor="${anchor}"]`)
        .getBoundingClientRect().top;

      window.scrollTo(0, window.scrollY + top - 90);
    } else {
      location.href = `${window.location.origin}/schedule#${anchor}`;
    }
  }

  isSchedulePage() {
    return isInBrowser() && location.href.includes('schedule');
  }

  render() {
    const { currentEvents } = this.state;
    return (!this.isSchedulePage() && currentEvents) && (
      <div className="current-event">
        { currentEvents.map((item, index) => {
          const { time, title, anchor, speakerData: { speakerName, company, imageSrc } } = item;
          const isFirst = index === 0; // TODO: choose the current event dynamically
          const computedClass = classNames('item',
            { '-now': isFirst, '-next': !isFirst
            // , '-one-line': !speakerName
          }
          );
          return (
            <div className={computedClass} key={index}>
              { isFirst
                ? <div className="time"><span>Now</span></div>
                : (
                  <div className="time">
                    <span className="hours">{ time.hours }</span>
                    <span className="minutes">{ time.minutes }</span>
                  </div>
                )
              }
              { speakerName && (
                  <div className="speaker-img">
                    <img src={`${imageSrc}.jpg`} className="-drop-shadow" alt={speakerName}/>
                  </div>
                )
              }
              <div className="talk">
                <div className="title" onClick={this.navigateToEvent.bind(this, anchor)}>
                  { title }
                </div>
                { speakerName && <div className="speaker">{ speakerName } ({ company })</div> }
              </div>
            </div>
          );
        }) }
      </div>
    );
  }
}
