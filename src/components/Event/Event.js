import React, { PropTypes as toBe } from 'react';
import LazyLoad from 'react-lazyload';

import './event.scss';

export default class Event extends React.Component {
  static propTypes = {
    data: toBe.object, // add more types
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { time, speakerName, imageSrc, anchor, title, company, description } = this.props.data;

    return (
      <div className="event">
        <a href="" name={anchor} className="-no-outline anchor" />
        <div className="time auto-height-fix-time">
          <span className="hours">{ time.hours }</span>
          <span className="minutes">{ time.minutes }</span>
        </div>
        <div className="info-wrapper">
          <div className="info">
            <div className="title-wrapper auto-height-fix-title">
              { speakerName && (
                  <div className="speaker-img">
                    <LazyLoad offset={150}>
                      <img src={`${imageSrc}.jpg`} className="-drop-shadow" alt={speakerName}/>
                    </LazyLoad>
                  </div>
                )
              }
              <div className="info-description">
                <h4 className="title">{ title }</h4>
                { speakerName
                  ? <strong className="speaker">{ speakerName } ({ company })</strong>
                  : ''
                }
              </div>
            </div>
            <div className="description">
              { description.map(item => <p key={item}>{ item }</p>) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
