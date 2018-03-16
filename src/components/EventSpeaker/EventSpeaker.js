import React, { PropTypes as toBe } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import classNames from 'classnames';
import Swipe from 'react-easy-swipe';

import './event-speaker.scss';

export default class EventSpeaker extends React.Component {
  static propTypes = {
    data: toBe.object, // add more types
    onOverlayClick: toBe.func,
  };

  static defaultProps = {
    data: {},
    onOverlayClick: () => {},
  };

  constructor() {
    super();

    this.state = {
      visible: false,
    };
    this.close = this.close.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 0);
  }

  close() {
    this.setState({ visible: false }, () => {
      setTimeout(this.props.onOverlayClick, 300);
    });
  }

  renderSpeaker() {
    const {
      firstName,
      lastName,
      imageSrc,
      social,
      position,
      company,
      description,
      anchor,
    } = this.props.data;

    const className = 'event-speaker-data';

    return (
      <div className={className}>
        <div className="event-speaker-data-cols">
          <a href="" name={anchor} className="-no-outline anchor" />
          <div className="event-speaker-data-img">
            <LazyLoad offset={150}>
              <img
                src={`${imageSrc}.jpg`}
                className="-drop-shadow"
                alt={`${firstName} ${lastName}`}
              />
            </LazyLoad>
            <SocialIcons data={social} />
          </div>
          <div className="event-speaker-data-text">
            <h3>
              <span className="person-first-name">{firstName}</span>{' '}
              <span className="person-last-name">{lastName}</span>
            </h3>
            <p>
              { position && <span className="person-position">{position}</span> }
              { company && <span className="person-company">{company}</span> }
            </p>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { visible } = this.state;
    return (
      <Swipe
        className={classNames('event-speaker', { '-visible': visible })}
        onSwipeRight={this.close}
      >
        <div className="overlay" onClick={this.close} />
        { this.renderSpeaker() }
      </Swipe>
    );
  }
}
