import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton'

import WorkshopsData from '../../../data/Workshops.js';
import config from '../../../data/SiteConfig';
import './workshops.scss';

export default class WorkshopBlock extends Component {
  renderWorkshop(workshop) {
    const { authors, title, description, list, images, anchor, additionalInfo } = workshop;
    return (
      <div className="workshop" key={title}>
        <a href="" name={anchor} className="-no-outline anchor" />
        <div className="workshop-image column">
          { images.map((item, index) => {
            return (
              <LazyLoad offset={150} key={index}>
                <img
                  src={`${item.imageSrc}.jpg`}
                  className="-drop-shadow"
                  alt={`${item.title}`}
                />
              </LazyLoad>
            ) }
            )
          }
        </div>
        <div className="column">
          <h3 className="workshop-title">{ title }</h3>
          { <p className="workshop-author">{ authors.join(', ') }</p> }
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
          <br />
          <BuyTicketsButton
            href={config.workshopWebpackUrl}
            eventLabel="Buy Workshop Webpack ticket"
            eventCategory="purchaseWorkshop"
            text="Buy Workshop Ticket"
          />
          <BuyTicketsButton
            href={config.workshopWebpackAndConfUrl}
            eventLabel="Buy double ticket"
            eventCategory="purchaseDouble"
            text="Buy Double Ticket"
          />
        </div>
      </div>
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
