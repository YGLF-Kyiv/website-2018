import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton'

import WorkshopsData from '../../../data/Workshops.js';
import config from '../../../data/SiteConfig';
import './workshops.scss';

export default class WorkshopBlock extends Component {
  renderWorkshop(workshop) {
    const { authors, title, description, list, images } = workshop;
    return (
      <div className="workshop" key={title}>
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
          <BuyTicketsButton
            href={config.workshopWebpackUrl}
            eventLabel="Buy Workshop Webpack tickets"
            eventCategory="purchaseWorkshop"
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="workshops">
        <h2>Workshops</h2>
        { WorkshopsData.all.map(item => this.renderWorkshop(item)) }
      </div>
    );
  }
}
