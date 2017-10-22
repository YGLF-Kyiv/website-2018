import React, { Component } from 'react';
import './venue-block.scss';
import venuePhoto from '../../../static/venue.jpg';

export default class VenueBlock extends Component {
  render() {
    return (
      <div className="venue-block">
        <img className="venue-block-img" src={venuePhoto} alt="The Venue" />
        <div className="container container-fluid">
          {/*<div className="venue-block-name">*/}
            {/*<span>*/}
              {/*2 <i>Awesome Spaces</i>*/}
            {/*</span>*/}
          {/*</div>*/}
          <div className="venue-block-text">
            <h2>The Venue</h2>
            <p>
              YGLF will take place at Bel étage - a venue in the centre of the city. There’s a beautiful restaurant to serve lunch for all attendees, a two-storey auditorium and an amazing roof, where we plan to have snacks and coffee during the day.
            </p>
            <p>
              Located in the Down town, it’s easy to get there from any hotel, and it’s surrounded by dozens of restaurants and coffee shops.
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
