import React from 'react';
import './header-menu.scss';
import Link from "gatsby-link";

export default class HeaderMenu extends React.Component {
  render() {
    return (
      <div className="header-menu">
        <div className="header-menu-expand">
          <a href="#" className="header-menu-expand-btn">Menu</a>
        </div>
        <div className="header-menu-inner">
          <Link activeClassName="-active" to="">Home</Link>
          <Link activeClassName="-active" to="/speakers">Speakers</Link>
          <Link activeClassName="-active" to="/schedule">Schedule</Link>
          <Link activeClassName="-active" to="/contacts">Contacts</Link>
          <Link activeClassName="-active" to="/about">About</Link>
        </div>
      </div>
    );
  }
}
