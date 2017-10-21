import React, { Component } from 'react';
import './venue-block.scss';
import venuePhoto from '../../../static/venue.png';

export default class VenueBlock extends Component {
  render() {
    return (
      <div className="venue-block">
        <img className="venue-block-img" src={venuePhoto} alt="The Venue" />
        <div className="container container-fluid">
          <div className="venue-block-name">
          <span>
            2 <i>Awesome Spaces</i>
          </span>
          </div>
          <div className="venue-block-text">
            <h2>The Venue</h2>
            <p>
              This year the conference will take place, once again, at the elegant Cameri Theathre - Tel Aviv's municipal theathre. Located in the center of bohemic Tel Aviv, it is considered one of Israel's largest and most respected theathers. The Cameri holds over dozens of yearly productions, inlcuding a touring company. Classical and modern will meet under an urban wrap, for another unforgettable conference.
            </p>
            <p>
              <strong>Bel étage</strong><br />
              Shota Rustaveli St, 16а, Kyiv, Ukraine
            </p>
            <div className="venue-block-text-button">
              <a href="" className="get-directions">Get Directions</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
