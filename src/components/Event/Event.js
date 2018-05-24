import React, { PropTypes as toBe } from 'react';
import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';
import classNames from 'classnames';

import { isInBrowser } from '../../shared/utils/common';

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
  }

  componentDidMount() {
    const { anchor } = this.props.data;
    if (isInBrowser() && window.location.hash.replace('#', '') === anchor) {
      setTimeout(this.toggleReadMore, 100);
    }
  }

  getElTop() {
    return this.el.getBoundingClientRect().top;
  }

  onSpeakerClick = e => {
    e.preventDefault();

    this.props.onSpeakerClick();
  }

  scrolltoElTop = () => {
    window.scrollTo(0, window.scrollY + this.getElTop() - 90);
  }

  toggleReadMore = e => {
    e && e.preventDefault();

    if (this.props.description && this.props.description.length) {
      this.setState({ opened: !this.state.opened });
    }

    this.scrolltoElTop();
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
      anchor,
      emoji,
      speakerData: { speakerName, imageSrc, anchor: speakerAnchor },
    } = this.props.data;
    const { day } = this.props;
    const { opened } = this.state;
    const computedClass = classNames('event', className, {
      '-opened': opened,
      '-read-more-hidden': !showReadMore,
      '-no-description': !description.length,
      'emoji': emoji && emoji !== '✔️'
    });
    const dateTime = `2018-05-${day}T${time.hours}:${time.minutes}`;

    return (
      <div data-anchor={anchor} className={computedClass} ref={(el) => { this.el = el; }}>
        <div className="time-box">
          <span className="now">Now</span>
          <time className="time auto-height-fix-time" dateTime={dateTime}>
            {
              (emoji && emoji !== '✔️') &&
                <span className="emoji">{emoji}</span>
            }
            <span className="hours">{ time.hours }</span>
            <span className="minutes">{ time.minutes }</span>
          </time>
        </div>
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
                  <a href={`#${anchor}`}>
                    <h4 className="info-description-title">
                      { title }
                      { duration && (
                        <span className="info-description-time"><strong>,</strong> { duration }</span>
                      ) }
                    </h4>
                  </a>
                  { speakerName
                    ? (
                      <a
                        className="info-description-speaker"
                        onClick={this.onSpeakerClick}
                        href={`/speakers#${speakerAnchor}`}
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
                  { description.map(item =>
                    typeof item === 'string' ?
                      <p key={item} dangerouslySetInnerHTML={{ __html: item }}/> :
                      <div key={item} dangerouslySetInnerHTML={item}/>
                  ) }
                </div>
              ) }
            </div>
          </FitToRhythm>
        </div>
        { showReadMore && [
          <a
            href={`#${anchor}`}
            onClick={this.toggleReadMore}
            className="event-read-more"
            key="event-read-more"
          >
            Read more
          </a>,
          <a
            href={`#${anchor}`}
            onClick={this.toggleReadMore}
            className="event-read-less"
            key="event-read-less"
          >
            Less
          </a>
        ] }
      </div>
    );
  }
}
