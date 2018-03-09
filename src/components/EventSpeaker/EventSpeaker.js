import React, { PropTypes as toBe } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import classNames from 'classnames';

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
  }

  componentDidMount() {
    setTimeout(() => this.setState({ visible: true }), 0);
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
      <div className={classNames('event-speaker', { '-visible': visible })}>
        <div className="overlay" onClick={this.props.onOverlayClick} />
        { this.renderSpeaker() }
      </div>
    );
  }
}
