import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import WorkshopsData from '../../../data/Workshops.js';
import './workshops.scss';

export default class WorkshopBlock extends Component {
  renderWorkshop(workshop) {
    const { authors, title, description, list, imageSrc } = workshop;
    return (
      <div className="workshop" key={title}>
        <div className="workshop-image column">
          <LazyLoad offset={150}>
            <img
              src={`${imageSrc}.jpg`}
              className="-drop-shadow"
              alt={`${title}`}
            />
          </LazyLoad>
        </div>
        <div className="column">
          <h3 className="workshop-title">{ title }</h3>
          { <p className="workshop-author">{ authors.join(', ') }</p> }
          <div className="workshop-description">
            { description.map(item => {
              return <p>{ item }</p>
            }) }
          </div>
          <ul className="workshop-desc-list">
            { list.map((item, index) => <li key={index}>{ item }</li>) }
          </ul>
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
