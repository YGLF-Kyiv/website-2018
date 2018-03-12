import React, { PropTypes as toBe } from 'react';
import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';
import classNames from 'classnames';

import './event.scss';

export default class Event extends React.Component {
  static propTypes = {
    data: toBe.object, // add more types
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
      time, title, company, description, showReadMore, className,
      speakerData: { speakerName, imageSrc, anchor },
    } = this.props.data;
    const { opened } = this.state;
    const computedClass = classNames('event', className, {
      '-opened': opened,
      '-read-more-hidden': !showReadMore,
      '-no-description': !description.length
    });

    return (
      <div className={computedClass}>
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
                  { description.map(item => <p key={item}>{ item }</p>) }
                </div>
              ) }
            </div>
          </FitToRhythm>
        </div>
        { showReadMore && (
          <a href={`#${anchor}`} onClick={this.toggleReadMore} className="event-read-more">
            {`READ ${opened ? 'LESS' : 'MORE'}`}
          </a>
        ) }
      </div>
    );
  }
}
