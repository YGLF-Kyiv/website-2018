import React, { Component } from 'react';
import './highlighted-speaker-block.scss';
import speakerData from '../../../data/speakers.json';
import _ from 'lodash/fp';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import { isChrome } from '../../utils/environment';

export default class HighlightedSpeakerBlock extends Component {
  render() {
    const data = _.flow([
      _.filter(_.property('highlighted')),
      _.sample
    ])(speakerData.all);
    const imageExtension = isChrome() ? 'webp' : 'jpg';

    return (
      <div className="highlighted-speaker-block container container-fluid">
        <h2>Highlighted Speaker</h2>
        <div className="highlighted-speaker-block-cols">
          <div className="highlighted-speaker-block-img">
            <LazyLoad offset={150}>
              <img
                src={`/speakers/${data.image_src}.${imageExtension}`}
                className="drop-shadow"
                alt={`${data.first_name} ${data.last_name}`}
              />
            </LazyLoad>
            <SocialIcons urls={data.social_icons} />
          </div>
          <div className="highlighted-speaker-block-text">
            <h3>
              <span className="speaker-first-name">{data.first_name}</span>{' '}
              <span className="speaker-last-name">{data.last_name}</span>
            </h3>
            <p dangerouslySetInnerHTML={{__html: data.highlightedDescription}} />
            <div className="highlighted-speaker-block-text-button">
              <a
                className="see-all-speakers-button"
                href="/speakers"
              >
                See All Speakers
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
