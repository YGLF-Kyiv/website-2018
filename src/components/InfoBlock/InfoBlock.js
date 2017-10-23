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
            This non-profit conference is aimed at delivering high quality content on the hottest topics that cutting edge Frontend developers need to know.
          </p>
          <p>
            For the first time ever, YGLF  is coming to Kyiv, the amazing European capital city of Ukraine.
          </p>
          <p>
            This is our first international Front End conference on such a scale. People called us crazy, but by bringing internationally recognized speakers, we’re going to break the wall that separates the  huge East European Frontend community from the rest of the world.
          </p>
          <p>
            We hope you'll enjoy our efforts, community involvement and - of course - all the knowledge that will be shared.
          </p>
          {/*<div className="info-block-text-button">*/}
            {/*<BuyTicketsButton />*/}
          {/*</div>*/}
        </div>
      </div>
    );
  }
}
