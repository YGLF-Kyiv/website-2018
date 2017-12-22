import React from 'react';
import './speakers.scss';
import { gaTrack } from '../utils/ga';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import PersonBlock from '../components/PersonBlock/PersonBlock';
import speakersData from '../../data/speakers.json';
import speakersIntroData from '../../data/speakersIntro.js';

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
          <SpeakersIntroBlock data={speakersIntroData.meetSpeakers} />
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
