import React, { Component } from 'react';
import './info-block.scss';
import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton';

export default class InfoBlock extends Component {
  render() {
    return (
      <div className="info-block container container-fluid">
        {/*<div className="info-block-name">*/}
          {/*<span>*/}
            {/*1 <i>Amazing Talks</i>*/}
          {/*</span>*/}
        {/*</div>*/}
        <div className="info-block-text">
          {/*<h2>Meet Our Speakers</h2>*/}
          <p>
            This non-profit conference is aimed at delivering high quality content on the hottest topics that Frontend developers who want to be on the cutting edge need to know.
          </p>
          <p>
            For the first time ever YGLF is coming to Kyiv, the amazing European capital city of Ukraine with the 24/7 sign on it.
          </p>
          <p>
            This is the first international Front End conference on such a scale. People called us crazy, but by bringing internationally recognized speakers, we’re going to break the wall for huge East European Frontend community.
          </p>
          <p>
            We hope you'll enjoy our efforts, community involvement and - of course - all the knowledge that will be shared.
          </p>
          <div className="info-block-text-button">
            <BuyTicketsButton />
          </div>
        </div>
      </div>
    );
  }
}
