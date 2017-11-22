import React, { Component } from 'react';
import SocialIcons from '../SocialIcons/SocialIcons';
import { isInBrowser } from '../../utils/common';
import { isChrome } from '../../utils/environment';
import LazyLoad from 'react-lazyload';
import './speaker-block.scss';

export default class Speaker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSize: {
        width: 0,
        height: 0,
      },
    };
  }

  setImageSize() {
    if (isInBrowser()) {
      let width = 438;

      if (window.innerWidth > 1200) {
        width = 438;
      } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        width = 318;
      } else if (window.innerWidth >= 800 && window.innerWidth < 992) {
        width = 260;
      } else if (window.innerWidth >= 460 && window.innerWidth < 800) {
        width = 170;
      } else if (window.innerWidth < 460) {
        width = window.innerWidth - 120;
      }

      let imageSize = {
        width: width,
        height: width / (440 / 495),
      };

      this.setState({ imageSize });
    }
  }

  componentDidMount() {
    this.setImageSize();
    window.addEventListener('resize', this.setImageSize.bind(this));
    window.addEventListener('orientationchange', this.setImageSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setImageSize.bind(this));
    window.removeEventListener(
      'orientationchange',
      this.setImageSize.bind(this)
    );
  }

  render() {
    const { speaker } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';
    const windowWidth = isInBrowser() ? window.innerWidth : null;

    return (
      <div className="speaker">
        <div className="main-speaker-info">
          <LazyLoad height={this.state.imageSize.height} offset={150}>
            <img
              src={`/speakers/${speaker.image_src}.${imageExtension}`}
              className="drop-shadow speaker-img"
              style={this.state.imageSize}
              alt={`${speaker.first_name} ${speaker.last_name}`}
            />
          </LazyLoad>
          <SocialIcons urls={speaker.social_icons} />
          <div className="speaker-info">
            <h2>
            <span className="speaker-first-name">
              {speaker.first_name}
            </span>{' '}
              <span className="speaker-last-name">{speaker.last_name}</span>
            </h2>
            <span className="speaker-position">
            {speaker.position}
          </span>
            <span className="speaker-company">
            {speaker.company}
          </span>
            { (windowWidth > 768 || windowWidth < 460) && (
              <p className="speaker-description">
               {speaker.description}
              </p>
            )}
          </div>
        </div>
        { (windowWidth <= 768 && windowWidth >= 460) && (
          <div className="speaker-info-description">
            <p className="speaker-description">
              {speaker.description}
            </p>
          </div>
        )}
      </div>
    );
  }
}
