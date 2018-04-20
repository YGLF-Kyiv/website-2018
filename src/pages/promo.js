import React from 'react';
import './promo.scss';
import DevDoBlock from '../components/DevDoBlock/DevDoBlock';
import devDoData from '../../data/devDo.json';

export default class SpeakersPage extends React.Component {
  // componentWillMount() {
  //   gaTrack({
  //     eventCategory: 'speakers',
  //     eventAction: 'speakers',
  //     eventLabel: 'Speakers',
  //   });
  // }

  render() {
    return (
      <div className="page-promo lines-bg">
        <div className="container-fluid">
          <h2>What Front-end Dev Do?</h2>
        </div>
        <div className="container-fluid container">
          <p>
            Video description goes here the world. Listed below are our keynote speakers.
          </p>
        </div>
        <div className="devdo-list">
          {devDoData.all.map((devDoItem, index) => (
            <DevDoBlock key={devDoItem.id} data={devDoItem} />
          ))}
        </div>
      </div>
    );
  }
}
