import React from 'react';
import './index.scss';
// import InfoBlock from '../components/InfoBlock/InfoBlock';
import SpeakersIntroBlock from '../components/SpeakersIntroBlock/SpeakersIntroBlock';
import Workshops from '../components/Workshops/Workshops';
import HightlightedSpeakerBlock from '../components/HightlightedSpeakerBlock/HighlightedSpeakerBlock';
import OrderedBlock from '../components/OrderedBlock/OrderedBlock';

import OrderedBlockData from '../../data/orderedBlock.js';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <HightlightedSpeakerBlock />
        {/* <InfoBlock /> */}
        <div className="container container-fluid">
          <Workshops />
          <SpeakersIntroBlock data={OrderedBlockData.volunteering} />
          <OrderedBlock data={OrderedBlockData.venue} showSubheader={false} />
        </div>
      </div>
    );
  }
}
