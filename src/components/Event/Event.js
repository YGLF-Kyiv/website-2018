import React, { PropTypes as toBe } from 'react';
import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';
import classNames from 'classnames';

import './event.scss';

export default class Event extends React.Component {
  static propTypes = {
    data: toBe.object, // add more types
  };

  static defaultProps = {
    data: {},
  };

  constructor() {
    super();

    this.state = {
      opened: false,
    };

    this.toggleReadMore = this.toggleReadMore.bind(this);
  }

  toggleReadMore(e) {
    e.preventDefault();

    this.setState({ opened: !this.state.opened });
  }

  render() {
    const { time, speakerName, imageSrc, anchor, title, company, description, hideReadMore } = this.props.data;
    const { opened } = this.state;

    return (
      <div className={classNames('event', { '-opened': opened, '-read-more-hidden': hideReadMore })}>
        <a href="" name={anchor} className="-no-outline anchor" />
        <div className="time auto-height-fix-time">
          <span className="hours">{ time.hours }</span>
          <span className="minutes">{ time.minutes }</span>
        </div>
        <div className="info-wrapper">
          <FitToRhythm>
            <div className="info">
              <FitToRhythm className="title-wrapper">
                { speakerName && (
                    <div className="speaker-img">
                      <LazyLoad offset={150}>
                        <img src={`${imageSrc}.jpg`} className="-drop-shadow" alt={speakerName}/>
                      </LazyLoad>
                    </div>
                  )
                }
                <div className="info-description">
                  <h4 className="info-description-title">{ title }</h4>
                  { speakerName
                    ? (
                      <strong className="info-description-speaker">
                        { speakerName } { company && `(${company})` }
                      </strong>
                    )
                    : ''
                  }
                </div>
              </FitToRhythm>
              { !!description.length && (
                <div className="description">
                  { description.map(item => <p key={item}>{ item }</p>) }
                </div>
              ) }
            </div>
          </FitToRhythm>
        </div>
        { !hideReadMore && (
          <a href={`#${anchor}`} onClick={this.toggleReadMore} className="event-read-more">
            {`READ ${opened ? 'LESS' : 'MORE'}`}
          </a>
        ) }
      </div>
    );
  }
}
