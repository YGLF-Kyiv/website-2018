import React from 'react';
import './index.scss';
// import InfoBlock from '../components/InfoBlock/InfoBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import OrderedBlock from '../components/OrderedBlock/OrderedBlock';
import OrderedBlockData from '../../data/orderedBlock.js';
import HightlightedSpeakerBlock from '../components/HightlightedSpeakerBlock/HighlightedSpeakerBlock';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <HightlightedSpeakerBlock />
        {/* <InfoBlock /> */}
        <div className="container container-fluid">
          <SpeakersIntroBlock data={OrderedBlockData.lightningTalks} />
        </div>
      </div>
    );
  }
}
