import React from 'react';
import './header.scss';
import Link from 'gatsby-link';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {/*<HeaderMenu />*/}
        <div className="header-title">
          <div className="container-fluid">
            <Link to="/">
              You Gotta Love Frontend Conference
            </Link>
          </div>
        </div>
        <div className="header-description">
          <div className="container-fluid">
            YGLF is a community event built by developers for developers
          </div>
        </div>
        <div className="header-date-location">
          <div className="container-fluid">
            <strong>24-25 May 2018</strong>, Kyiv, Ukraine
            <BuyTicketsButton />
          </div>
        </div>
      </div>
    );
  }
}
