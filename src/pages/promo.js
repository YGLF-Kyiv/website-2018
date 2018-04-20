import React from 'react';
import './promo.scss';
import DevDoBlock from '../components/DevDoBlock/DevDoBlock';
import PromoData from '../../data/promo.json';

export default class SpeakersPage extends React.Component {
  render() {
    const {
      title,
      description,
      actionButton,
      items
    } = PromoData;

    return (
      <div className="page-promo lines-bg">
        <div className="container-fluid">
          <h2 className="promo-title">{title}</h2>
        </div>
        <div className="container-fluid container">
          <p
            className="promo-description"
            dangerouslySetInnerHTML={{__html: description}}
          />
          <a
            href={actionButton.href}
            className="discuss-button"
            target={actionButton.target}
          >
            {actionButton.text}
          </a>
        </div>
        <div className="devdo-list">
          {items.map((devDoItem) => (
            <DevDoBlock key={devDoItem.id} data={devDoItem} />
          ))}
        </div>
      </div>
    );
  }
}
