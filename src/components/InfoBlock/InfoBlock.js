import React, { Component } from 'react';
import './info-block.scss';
import BuyTicketsButton from '../BuyTicketsButton/BuyTIcketsButton';

export default class InfoBlock extends Component {
  render() {
    return (
      <div className="info-block container container-fluid">
        <div className="info-block-name">
          <span>
            1 <i>Amazing Talks</i>
          </span>
        </div>
        <div className="info-block-text">
          <h2>Meet Our Speakers</h2>
          <p>

            This year YGLF Kyiv is hosting amazing speakers from all around the world. Listed below are our keynote speakers. For the whole lineup you can visit our Speakers page. Make sure to check back reguraly as this is just the beginning and we have many more to be announced soon!
          </p>
          <div className="info-block-text-button">
            <BuyTicketsButton />
          </div>
        </div>
      </div>
    );
  }
}
