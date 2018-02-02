import React from 'react';
import './index.scss';
// import InfoBlock from '../components/InfoBlock/InfoBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import Workshops from '../components/Workshops/Workshops';
import HightlightedSpeakerBlock from '../components/HightlightedSpeakerBlock/HighlightedSpeakerBlock';

import OrderedBlockData from '../../data/orderedBlock.js';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <HightlightedSpeakerBlock />
        {/* <InfoBlock /> */}
        <div className="container container-fluid">
          <Workshops />
          <SpeakersIntroBlock data={OrderedBlockData.lightningTalks} />
        </div>
      </div>
    );
  }
}
