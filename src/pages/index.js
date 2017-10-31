import React from 'react'
import "./index.scss";
import InfoBlock from '../components/InfoBlock/InfoBlock';
import VenueBlock from '../components/VenueBlock/VenueBlock';
import SpeakersBlock from '../components/SpeakersBlock/SpeakersBlock';

export default class Header extends React.Component {
  render() {
    return (
      <div className="page-index lines-bg">
        <InfoBlock />
        <SpeakersBlock />
        <VenueBlock />
      </div>
    );
  }
}
