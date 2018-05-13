import React from 'react';
import { DateTime } from 'luxon';
import MobileDetect from 'mobile-detect';
import classNames from 'classnames';

import scheduleData from './../../../data/schedule.json';
import speakersData from './../../../data/speakers.json';

import { constructSchedule, getCurrentEvents, isInBrowser } from '../../shared/utils/common';

import './current-event.scss';

const SCHEDULE = constructSchedule(scheduleData.days, speakersData.all);

export default class CurrentEvent extends React.Component {

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
    const currentEvents = getCurrentEvents(SCHEDULE);
    const md = new MobileDetect();

    return (!md.mobile() && currentEvents) && (
      <div className="current-event">
        { currentEvents.map((item, index) => {
          const { time, title, anchor, speakerData: { speakerName, company } } = item;
          const isFirst = index === 0; // TODO: choose the current event dynamically
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
