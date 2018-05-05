import React, { Component } from 'react';

import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton'
import FitToRhythm from '../FitToRhythm/FitToRhythm';

import WorkshopsData from '../../../data/Workshops.js';
import config from '../../../data/SiteConfig';
import './workshops.scss';

export default class Workshop extends Component {
  renderWorkshop(workshop) {
    const { authors, title, description, list, images, anchor, additionalInfo } = workshop;
    return (
      <FitToRhythm className="workshop" key={title}>
        <a href="" name={anchor} className="-no-outline anchor" />
        <div className="workshop-image column">
          { images.map((item, index) => {
            return (
              <img
                key={index}
                src={`${item.imageSrc}.jpg`}
                className="-drop-shadow"
                alt={`${item.title}`}
              />
            ) }
            )
          }
        </div>
        <div className="column">
          <FitToRhythm>
            <h3 className="workshop-title">{ title }</h3>
            <div className="workshop-author">
              { authors.map((author) => (
                <div key={author}>{ author }</div>
              )) }
            </div>
            <div className="workshop-description">
              { description.map((item, index) => {
                return <p key={index}>{ item }</p>
              }) }
            </div>
            <ul className="workshop-desc-list">
              { list.map((item, index) => <li key={index}>{ item }</li>) }
            </ul>
            <div className="additional-info">
              { additionalInfo.map((item, index) => {
                return <p key={index}>{ item }</p>
              }) }
            </div>
          </FitToRhythm>
          <BuyTicketsButton
            href={config.workshopWebpackUrl}
            eventLabel="Buy Workshop Webpack ticket"
            eventCategory="purchase"
            text="Buy Workshop Ticket"
          />
          <BuyTicketsButton
            href={config.workshopWebpackAndConfUrl}
            eventLabel="Buy Double ticket"
            eventCategory="purchase"
            text="Buy Double Ticket"
          />
        </div>
      </FitToRhythm>
    )
  }

  render() {
    return (
      <div className="workshops">
        <h2>Workshops</h2>
        {/*<a*/}
          {/*target="_blank"*/}
          {/*className="double-ticket-button"*/}
          {/*href={config.workshopWebpackAndConfUrl}*/}
        {/*>*/}
          {/*Significant Discount for Conference + Workshop Ticket*/}
        {/*</a>*/}
        { WorkshopsData.all.map(item => this.renderWorkshop(item)) }
      </div>
    );
  }
}
