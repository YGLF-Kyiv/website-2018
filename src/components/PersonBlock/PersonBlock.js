import React, { Component, PropTypes as toBe } from 'react';
import './person-block.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';

export default class PersonBlock extends Component {
  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {},
    isSmall: false,
  };

  render() {
    const {
      firstName,
      lastName,
      dogName,
      imageSrc,
      social,
      position,
      company,
      description,
      anchor,
    } = this.props.data;

    const className = 'person-block container container-fluid';
    const smallClass = this.props.isSmall ? '-small-blocks' : '';

    return (
      <FitToRhythm className={`${className} ${smallClass}`}>
        <div className="person-block-cols">
          <a href="" name={anchor} className="-no-outline anchor" />
          <div className="person-block-img">
            <img
              src={`${imageSrc}.jpg`}
              className="-drop-shadow"
              alt={`${firstName} ${lastName}`}
            />
            <SocialIcons data={social} />
          </div>
          <div className="person-block-text">
            <h3>
              <span className="person-first-name">{firstName}</span>{' '}
              <span className="person-last-name">{lastName}</span>
              {
                dogName && (
                  <span className="person-dog-name">& {dogName}</span>
                )
              }
            </h3>
            <p>
              { position && <span className="person-position">{position}</span> }
              { company && <span className="person-company">{company}</span> }
            </p>
            <p dangerouslySetInnerHTML={{__html: description}} />
          </div>
        </div>
      </FitToRhythm>
    );
  }
}
