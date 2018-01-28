import React from 'react';
import './header.scss';
import Link from 'gatsby-link';
import BuyTicketsButton from '../BuyTicketsButton/BuyTicketsButton';

export default class Header extends React.Component {
  static defaultProps = {
    showButton: true,
  };

  render() {
    const { showButton } = this.props;
    return (
      <div className="header">
        <div className="header-title">
          <div className="container-fluid">
            <Link to="/">
              <span>You Gotta Love</span> Frontend Conference
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
            <strong>24-25 May 2018</strong>
            <span>,&nbsp;</span>To be announced | Kyiv, Ukraine
          </div>
        </div>
        {showButton && <BuyTicketsButton />}
      </div>
    );
  }
}
