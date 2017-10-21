import React from 'react';
import cityImage from '../../../static/city.jpg';
import logo from '../../../static/logo.svg';
import "./intro.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-img">
          <img src={cityImage}/>
        </div>
        <div className="intro-stripes">
          <div className="green-line line-1"/>
          <div className="green-line line-2"/>
          <div className="green-line line-3"/>
        </div>
        <div className="intro-anounce">
          <img src={logo} alt="YGLF KYIV"/>
          <p>
            COMING SOON<br/>
            May 2018 | Kyiv, Ukraine
          </p>
        </div>
      </div>
    );
  }
}
