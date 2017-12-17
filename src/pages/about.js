import React from 'react';
import './about.scss';
import LazyLoad from 'react-lazyload';

import OrderedBlock from '../components/OrderedBlock/OrderedBlock';
import PersonBlock from '../components/PersonBlock/PersonBlock';

import { gaTrack } from '../utils/ga';
import { isChrome } from '../utils/environment';

import teamData from '../../data/team.js';
import OrderedBlockData from '../../data/orderedBlock.js';

export default class AboutPage extends React.Component {

  componentWillMount() {
    gaTrack({
      eventCategory: 'about',
      eventAction: 'about',
      eventLabel: 'About',
    });
  }

  render() {
    const imageExtension = isChrome() ? 'webp' : 'png';

    return (
      <div className="about-page bg lines-bg">
        <div className="about-page-header">
          <div className="about-page-header-image -drop-shadow">
            <LazyLoad>
              <img
                src={`/about-header-photo.${imageExtension}`}
                alt="about"
              />
            </LazyLoad>
          </div>
          <div className="about-page-header-text">
            <h1 className="auto-height-fix-title">About</h1>
            <p className="auto-height-fix">
              Third time is a charm - the largest international frontend
              conference in the Middle East is happening for the third time
              <small>24-25 May, Kyiv</small>
            </p>
          </div>
        </div>

        <div className="container">
          <OrderedBlock data={OrderedBlockData.whoWeAre} />

          <div className="about-page-past">
            <div className="about-page-past-section">
              <h3 className="auto-height-fix-title">YGLF 2015</h3>
              <p className="auto-height-fix margin-bottom-1">
                Kicking off with JavaScript expert, Douglas Crockford, the 2015
                inauguration event was roaring. Complete with an after-party
                venue for the evenings, everyone rambled on about Martin
                Kleppe’s interactive art display into the night. Supported by
                sun rays of joy and unbelievable energy, it was the first
                convention of its kind in Israel.
              </p>
              <a
                href="https://www.youtube.com/watch?v=7TwrABEAfTk&list=PLII-CO3Ff0qbx_zJYVsmg0pIgf32zyB5p"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-underline"
              >
                VIEW 2015 TALKS
              </a>
            </div>
            <div className="about-page-past-section">
              <h3 className="auto-height-fix-title">YGLF 2016</h3>
              <p className="auto-height-fix margin-bottom-2">
                At the second run of the conference, we gladly hosted Lea Verou
                along with other world-class Frontend gurus. In and around the
                talks, the technical dominated the stage, while social conquered
                the bar and the lounge.
              </p>
              <a
                href="https://www.youtube.com/watch?v=HKYviOtA55A&list=PLII-CO3Ff0qY1VbkvUyLcUmegS3U7XB1D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-underline"
              >
                VIEW 2016 TALKS
              </a>
            </div>
          </div>
          <OrderedBlock data={OrderedBlockData.team} />
          <div className="team-list">
            { teamData.all.map((speaker, index) => {
              return <PersonBlock data={speaker} key={index} isSmall />
            })}
          </div>
        </div>
      </div>
    );
  }
}
