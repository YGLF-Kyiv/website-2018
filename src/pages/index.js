import React from 'react';
import './index.scss';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import VenueBlock from '../components/VenueBlock/VenueBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import speakersIntroData from '../assets/speakersIntro.json';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <InfoBlock />
        <div className="container container-fluid">
          <SpeakersIntroBlock data={speakersIntroData.callForPapers} />
        </div>
        <VenueBlock />
      </div>
    );
  }
}
