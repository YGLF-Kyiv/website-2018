import React, { Component } from 'react';
import './sponsors-block.scss';

export default class SponsorsBlock extends Component {
  render() {
    return (
      <div className="sponsors-block container container-fluid">
        <div className="sponsors-block-name">
          <span>
            3 <i>Priceless Partners</i>
          </span>
        </div>
        <div className="sponsors-block-text">
          <h2>Sponsors</h2>
          <p>
            YGLF is a community event made by developers, for developers. In
            being so it provides an unmatched opportunity for a connection
            between the great Israeli frontend community and the companies that
            help shape the web. We would like to thank our partners who are
            helping us to make this great event happen.
          </p>
          <div className="sponsors-block-text-button">
            <a href="">Become a sponsor</a>
          </div>
        </div>
        <div className="sponsors-block-logos" />
      </div>
    );
  }
}
