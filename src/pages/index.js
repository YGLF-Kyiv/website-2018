import React from 'react';
import './index.scss';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import VenueBlock from '../components/VenueBlock/VenueBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import speakersIntroData from '../../data/speakersIntro.json';
import HightlightedSpeakerBlock from '../components/HightlightedSpeakerBlock/HighlightedSpeakerBlock';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <HightlightedSpeakerBlock />
        <InfoBlock />
        <div className="container container-fluid">
          <SpeakersIntroBlock data={speakersIntroData.callForPapers} />
        </div>
        <VenueBlock />
      </div>
    );
  }
}
