import React, { Component } from 'react';
import './highlighted-speaker-block.scss';
import speakersData from '../../../data/speakers.json';
import _ from 'lodash/fp';
import SocialIcons from '../SocialIcons/SocialIcons';
import LazyLoad from 'react-lazyload';
import FitToRhythm from '../FitToRhythm/FitToRhythm';

export default class HighlightedSpeakerBlock extends Component {
  render() {
    const data = _.flow([
      _.filter(_.property('highlighted')),
      _.sample
    ])(speakersData.all);

    return (
      <FitToRhythm className="highlighted-speaker-block container container-fluid">
        <h2>Highlighted Speaker</h2>
        <div className="highlighted-speaker-block-cols">
          <div className="highlighted-speaker-block-img">
            <LazyLoad offset={150}>
              <FitToRhythm>
                <img
                  src={`${data.imageSrc}.jpg`}
                  className="-drop-shadow"
                  alt={`${data.firstName} ${data.lastName}`}
                />
              </FitToRhythm>
            </LazyLoad>
            <SocialIcons data={data.social} />
          </div>
          <div className="highlighted-speaker-block-text">
            <h3>
              <span className="speaker-first-name">{data.firstName}</span>{' '}
              <span className="speaker-last-name">{data.lastName}</span>
            </h3>
            <FitToRhythm>
              <p dangerouslySetInnerHTML={{__html: data.highlightedDescription}} />
            </FitToRhythm>
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
      </FitToRhythm>
    );
  }
}
