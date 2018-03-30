import React from 'react';
import classNames from 'classnames';
import _ from 'lodash/fp';

import './sponsors.scss';

import { gaTrack } from '../shared/utils/ga';

import sponsorsData from '../../data/sponsors.js';

export default class SponsorshipPage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'sponsors',
      eventAction: 'sponsors',
      eventLabel: 'Sponsors',
    });
  }

  render() {
    return (
      <div className="page-sponsors lines-bg">
        <div className="container container-fluid">
          <section>
            <h2>Sponsors</h2>
            <div className="sponsors-holder">
              { _.shuffle(sponsorsData.all).map(sponsor => (
                <div className={classNames('sponsor', sponsor.className)} key={sponsor.title}>
                  <a className="img-holder" href={sponsor.url} target="_blank">
                    <img src={sponsor.imageSrc} alt={sponsor.title} />
                  </a>
                  <div className="description">
                    { sponsor.description.map(p => <p>{ p }</p>) }
                  </div>
                </div>)
              ) }
            </div>
            <div className="secondary-sponsors-holder">
              { _.shuffle(sponsorsData.secondary).map(sponsor => (
                <div className={classNames('sponsor', sponsor.className)} key={sponsor.title}>
                  <a className="img-holder" href={sponsor.url} target="_blank">
                    <img src={sponsor.imageSrc} alt={sponsor.title} />
                  </a>
                </div>)
              ) }
            </div>
          </section>
        </div>
      </div>
    );
  }
}
