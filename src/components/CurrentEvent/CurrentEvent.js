import React from 'react';
import { DateTime } from 'luxon';
import MobileDetect from 'mobile-detect';
import classNames from 'classnames';

import scheduleData from './../../../data/schedule.js';
import speakersData from './../../../data/speakers.json';

import { constructSchedule, isInBrowser } from '../../shared/utils/common';

import './current-event.scss';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class CurrentEvent extends React.Component {

  getCurrentEvents() {
    const today = DateTime.local().toLocaleString();
    const yearMonth = { year: 2018, month: 5 };
    const firstDay = DateTime.fromObject({ ...yearMonth, day: SCHEDULE[0].day}).toLocaleString();
    const secondDay = DateTime.fromObject({ ...yearMonth, day: SCHEDULE[1].day}).toLocaleString();

    if ([firstDay, secondDay].includes(today)) {
      // TODO: get the needed current events
    } else { // TODO: what should be shown before and after May 24-25 and at night?
      return [SCHEDULE[0].events[0], SCHEDULE[0].events[15]];
    }
  }

  navigateToEvent(anchor) {
    if (location.href.includes('schedule')
      && isInBrowser() && window.location.hash.replace('#', '') === anchor) {
      location.hash = `#${anchor}`;
      const top = document.querySelectorAll(`.${anchor}`)[0].getBoundingClientRect().top;
      window.scrollTo(0, window.scrollY + top - 90);
    } else {
      location.href = `${window.location.origin}/schedule#${anchor}`;
    }
  }

  render() {
    const currentEvents = this.getCurrentEvents();
    const md = new MobileDetect();

    return md.mobile() && (
      <div className="current-event">
        { currentEvents.map((item, index) => {
          const { time, title, anchor, speakerData: { speakerName, company } } = item;
          const isFirst = index === 0;
          const computedClass = classNames('item',
            { '-now': isFirst, '-next': !isFirst, '-one-line': !speakerName }
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
