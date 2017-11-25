import React from 'react';
import './index.scss';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import VenueBlock from '../components/VenueBlock/VenueBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import speakersIntroData from '../assets/speakersIntro.json';
import SpeakerBlock from '../components/SpeakerBlock/SpeakerBlock';
import speakerData from '../assets/speakers.json';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <div className="container container-fluid highlighted-speaker">
          <h3>Highlighted Speaker</h3>
          <SpeakerBlock small speaker={speakerData.highlighted} />
          <a href="/speakers" className="button-speakers">
            See All Speakers
          </a>
        </div>
        <InfoBlock />
        <div className="container container-fluid">
          <SpeakersIntroBlock data={speakersIntroData.callForPapers} />
        </div>
        <VenueBlock />
      </div>
    );
  }
}
