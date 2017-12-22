import React, { Component, PropTypes as toBe } from 'react';
import './person-block.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/environment';

export default class PersonBlock extends Component {
  static propTypes = {
    data: toBe.object,
  };

  static defaultProps = {
    data: {},
    isSmall: false,
  }

  get anchor() {
    const { data: { firstName, lastName } } = this.props;
    return `${firstName}-${lastName}`.replace(/\s/g, '-');
  }

  render() {
    const {
      firstName,
      lastName,
      imageSrc,
      social,
      position,
      company,
      description,
    } = this.props.data;

    const imageExtension = isChrome() ? 'webp' : 'jpg';
    const className = 'person-block container container-fluid';
    const smallClass = this.props.isSmall ? '-small-blocks' : '';

    return (
      <div className={`${className} ${smallClass}`}>
        <div className="person-block-cols">
          <a
            href=""
            name={this.anchor}
            className="-no-outline anchor"
          />
          <div className="person-block-img">
            <LazyLoad offset={150}>
              <img
                src={`${imageSrc}.${imageExtension}`}
                className="-drop-shadow"
                alt={`${firstName} ${lastName}`}
              />
            </LazyLoad>
            <SocialIcons data={social} />
          </div>
          <div className="person-block-text">
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
}
