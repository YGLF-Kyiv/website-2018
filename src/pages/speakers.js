import React from 'react';
import './speakers.scss';
import { gaTrack } from '../shared/utils/ga';
import PersonBlock from '../components/PersonBlock/PersonBlock';
import speakersData from '../../data/speakers.json';

export default class SpeakersPage extends React.Component {
  componentWillMount() {
    gaTrack({
      eventCategory: 'speakers',
      eventAction: 'speakers',
      eventLabel: 'Speakers',
    });
  }

  render() {
    return (
      <div className="page-speakers lines-bg">
        <div className="container container-fluid">
          <h2>Meet Our Speakers</h2>
        </div>
        <div className="speakers">
          { speakersData.all.map((speaker, index) => {
            return <PersonBlock data={speaker} key={index} />
          })}
        </div>
      </div>
    );
  }
}
