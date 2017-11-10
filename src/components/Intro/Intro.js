import React from 'react';
import logo from '../../../static/logo.svg';
import "./intro.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-img" />
        <div className="intro-stripes">
          <div className="green-line line-1"/>
          <div className="green-line line-2"/>
          <div className="green-line line-3"/>
        </div>
        <div className="intro-anounce">
          <img className="intro-anounce-logo" src={logo} alt="YGLF KYIV"/>
          <p>24-25 May 2018 | Kyiv, Ukraine</p>
        </div>
      </div>
    );
  }
}
