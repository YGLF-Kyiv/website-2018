import React from 'react';
import './promo.scss';
import DevDoBlock from '../components/DevDoBlock/DevDoBlock';
import PromoData from '../../data/promo.json';

export default class PromoPage extends React.Component {
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
        <div className="devdo-list">
          {items.map((devDoItem) => (
            <DevDoBlock key={devDoItem.id} data={devDoItem} />
          ))}
        </div>
      </div>
    );
  }
}
