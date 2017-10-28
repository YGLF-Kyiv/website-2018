import React, { Component } from 'react';
import './venue-block.scss';

export default class VenueBlock extends Component {
  render() {
    return (
      <div className="venue-block">

        <div className="container container-fluid">
          {/*<div className="venue-block-name">*/}
            {/*<span>*/}
              {/*2 <i>Awesome Spaces</i>*/}
            {/*</span>*/}
          {/*</div>*/}
          <div className="venue-block-text">
            <h2>The Venue</h2>
            <div className="venue-block-img" />
            <p>
              YGLF  will take place at  Bel étage - a venue in the centre of the city. There’s a beautiful restaurant serving lunch for all attendees, a two-storey  auditorium, and an amazing roof, where there will be  snacks and coffee during the day.
            </p>
            <p>
              Located in the Downtown, it’s  easy  to get there from any hotel, and it’s
              surrounded by dozens of restaurants and coffee shops.
            </p>
            <p>
              <strong>Bel étage</strong><br />
              Shota Rustaveli St, 16a, Kyiv, Ukraine
            </p>
            {/*<div className="venue-block-text-button">*/}
              {/*<a href="" className="get-directions">Get Directions</a>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }
}
