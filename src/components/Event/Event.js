import React, { PropTypes as toBe } from 'react';
import './event.scss';
// import Subscribe from '../Subscribe/Subscribe';
// import SocialIcons from '../SocialIcons/SocialIcons';
// import Link from 'gatsby-link';
// import config from '../../../data/SiteConfig';
// import { gaTrack } from '../../shared/utils/ga';

export default class Event extends React.Component {
  static propTypes = {
    data: toBe.object, // add more types
  };

  static defaultProps = {
    data: {},
  };

  render() {
    const { time, speaker, title, company, description } = this.props.data;

    return (
      <div className="event">
        <div className="time auto-height-fix-time">
          <span className="hours">{ time.hours }</span>
          <span className="minutes">{ time.minutes }</span>
        </div>
        <div className="info-wrapper">
          <div className="info">
            <div className="title-wrapper auto-height-fix-title">
              <h4 className="title">{ title }</h4>
              { speaker
                ? <strong className="speaker">{ speaker } ({ company })</strong>
                : ''
              }
            </div>
            <div className="description">
              {/*<ReadMore paragraphs={description} cells={1} />*/} // TODO do we need a read more component?
            </div>
          </div>
        </div>
      </div>
    );
  }
}
