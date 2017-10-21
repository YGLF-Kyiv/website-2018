import React from 'react';
import './header.scss';
import Link from "gatsby-link";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-title">
          <div className="container-fluid">
            <Link to="/">
              You Gotta Love Frontend Conference
            </Link>
          </div>
        </div>
        <div className="header-description">
          <div className="container-fluid">
            The largest conference in the middle east, Made by developers for developers. Soon in Kyiv
          </div>
        </div>
        <div className="header-date-location">
          <div className="container-fluid">
            <strong>24-25 May 2018</strong>, Bel étage | Kyiv, Ukraine
          </div>
        </div>
      </div>
    );
  }
}
