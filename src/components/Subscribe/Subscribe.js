import React, { Component } from 'react';
import './subscribe.scss';

class Subscribe extends Component {
  render() {
    return (
      <form action="" method="post" className="subscribe-form">
        <div className="subscribe">
          <input
            type="email"
            name="EMAIL"
            placeholder="Enter Your email address"
            required
          />
          <button type="submit" name="subscribe">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
            <span>OK</span>
          </button>
        </div>
      </form>
    );
  }
}

export default Subscribe;
