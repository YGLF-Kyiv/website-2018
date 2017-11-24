import React from 'react';
import './index.scss';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import VenueBlock from '../components/VenueBlock/VenueBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import SpeakerBlock from '../components/SpeakerBlock/SpeakerBlock';
import speakersIntroData from '../assets/speakersIntro.json';
import speakerData from '../assets/speakers.json';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <InfoBlock />

        <div className="container container-fluid">
          <div className="highlighted-speaker">
            <h3>Highlighted Speaker</h3>
            <SpeakerBlock
              speaker={speakerData.highlighted}
              imageSize={{width: '220', height: '247'}}
            />
            <a href="/speakers" className="button-speakers">
              See All Speakers
            </a>
          </div>
          <SpeakersIntroBlock data={speakersIntroData.callForPapers} />
        </div>

        <VenueBlock />
      </div>
    );
  }
}
