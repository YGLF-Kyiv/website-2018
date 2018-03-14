import React, { PropTypes as toBe } from 'react';
import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';
import classNames from 'classnames';

import './event.scss';

export default class Event extends React.Component {
  static propTypes = {
    data: toBe.object, // add more types
    date: toBe.number,
    onSpeakerClick: toBe.func,
  };

  static defaultProps = {
    data: {},
    onSpeakerClick: () => {},
  };

  constructor() {
    super();

    this.state = {
      opened: false,
    };

    this.toggleReadMore = this.toggleReadMore.bind(this);
    this.onSpeakerClick = this.onSpeakerClick.bind(this);
  }

  onSpeakerClick(e) {
    e.preventDefault();

    this.props.onSpeakerClick();
  }

  toggleReadMore(e) {
    e.preventDefault();

    this.setState({ opened: !this.state.opened });
  }

  render() {
    const {
      time,
      title,
      company,
      description,
      showReadMore,
      className,
      duration,
      speakerData: { speakerName, imageSrc, anchor },
    } = this.props.data;
    const { opened } = this.state;
    const computedClass = classNames('event', className, {
      '-opened': opened,
      '-read-more-hidden': !showReadMore,
      '-no-description': !description.length
    });
    const dateTime = `2018-05-${this.props.day}T${time.hours}:${time.minutes}`;

    return (
      <div className={computedClass}>
        <a href="" name={anchor} className="-no-outline anchor" />
        <time className="time auto-height-fix-time" datetime={dateTime}>
          <span className="hours">{ time.hours }</span>
          <span className="minutes">{ time.minutes }</span>
        </time>
        <div className="info-wrapper">
          <FitToRhythm>
            <div className="info">
              <FitToRhythm className="title-wrapper">
                { speakerName && (
                    <div className="speaker-img" onClick={this.onSpeakerClick}>
                      <LazyLoad offset={150}>
                        <img src={`${imageSrc}.jpg`} className="-drop-shadow" alt={speakerName}/>
                      </LazyLoad>
                    </div>
                  )
                }
                <div className="info-description">
                  <h4 className="info-description-title">
                    { title }
                    { duration && (
                      <span className="info-description-time"><strong>,</strong> { duration }</span>
                    ) }
                  </h4>
                  { speakerName
                    ? (
                      <a
                        className="info-description-speaker"
                        onClick={this.onSpeakerClick}
                        href={`/speakers#${anchor}`}
                      >
                        { speakerName } { company && `(${company})` }
                      </a>
                    )
                    : ''
                  }
                </div>
              </FitToRhythm>
              { !!description.length && (
                <div className={classNames('description', { '-can-show-more': showReadMore })}>
                  {description.map(item => <p key={item} dangerouslySetInnerHTML={{ __html: item }} />) }
                </div>
              ) }
            </div>
          </FitToRhythm>
        </div>
        { showReadMore && (
          <a
            href=""
            name={anchor}
            onClick={this.toggleReadMore}
            className={classNames('event-read-more', { '-opened': opened })}
          >
            { opened ? 'LESS' : 'READ MORE' }
          </a>
        ) }
      </div>
    );
  }
}
