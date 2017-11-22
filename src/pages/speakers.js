import React from 'react';
import './speakers.scss';
import { gaTrack } from '../utils/ga';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import SpeakerBlock from '../components/SpeakerBlock/SpeakerBlock';
import speakersData from '../assets/speakers.json';
import speakersIntroData from '../assets/speakersIntro.json';

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
          <div className="container container-fluid">
            { speakersData.all.map((speaker, index) => {
              return <SpeakerBlock speaker={speaker} key={index} />
            })}
          </div>
        </div>
      </div>
    );
  }
}
