import React, { Component, PropTypes as toBe } from 'react';
import './speaker-block.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/environment';

export default class SpeakerBlock extends Component {

  static propTypes = {
    data: toBe.object,
  };

  render() {
    const { data } = this.props;
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="speaker-block container container-fluid">
        <div className="speaker-block-cols">
          <div className="speaker-block-img">
            <LazyLoad offset={150}>
              <img
                src={`/speakers/${data.image_src}.${imageExtension}`}
                className="drop-shadow"
                alt={`${data.first_name} ${data.last_name}`}
              />
            </LazyLoad>
            <SocialIcons urls={data.social_icons} />
          </div>
          <div className="speaker-block-text">
            <h3>
              <span className="speaker-first-name">{data.first_name}</span>{' '}
              <span className="speaker-last-name">{data.last_name}</span>
            </h3>
            <p>
              { data.position && <span className="speaker-position">{data.position}</span> }
              { data.company && <span className="speaker-company">{data.company}</span> }
            </p>
            <p dangerouslySetInnerHTML={{__html: data.description}} />
          </div>
        </div>
      </div>
    );
  }
}
