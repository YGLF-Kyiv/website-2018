import React from 'react'
import "./index.scss";
import Intro from '../components/Intro/Intro';
import InfoBlock from '../components/InfoBlock/InfoBlock';
import VenueBlock from '../components/VenueBlock/VenueBlock';
import SponsorsBlock from '../components/SponsorsBlock/SponsorsBlock';

export default class Header extends React.Component {
  render() {
    return (
      <div className="page-index">
        <Intro/>
        <div className="articles lines-bg">
          <InfoBlock />
          <VenueBlock />
          <SponsorsBlock />
        </div>
      </div>
    );
  }
}
